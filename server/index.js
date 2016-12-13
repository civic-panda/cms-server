'use strict';

import Express from 'express';
import path from 'path';

var keystone = require('keystone');
var restful = require('restful-keystone')(keystone);

var EmailSubscriber = keystone.list('EmailSubscriber');

// api
import apiRoutes from './api/home.routes';

function enforceUnique(req, res, next) {
  console.log(req.body);
  EmailSubscriber
    .model
    .find()
    .where('email', req.body.email)
    .exec(function (err, response) {
      if (response.length) {
        return res.sendStatus(422);
      }
      next();
    })
}

// Setup Route Bindings
exports = module.exports = (app) => {
  restful.expose({
    Issue: { methods: ['list'] },
    Task: { methods: ['list'] },
    EmailSubscriber: { methods: ['create', 'update'] }
  }).before({
    EmailSubscriber: enforceUnique
  }).start();

  app.use(Express.static(path.resolve(__dirname, '../dist')));
  app.use('/api', apiRoutes);
  app.use((req, res, next) => {
    if (req.path.match(/^\/keystone/)) {
      next();
      return;
    }
  });
};

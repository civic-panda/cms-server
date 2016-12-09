'use strict';

import Express from 'express';
import path from 'path';

var keystone = require('keystone');
var restful = require('restful-keystone')(keystone);

// api
import apiRoutes from './api/home.routes';

// Setup Route Bindings
exports = module.exports = (app) => {
  restful.expose({
    Issue: { methods: ['list'] },
    Task: { methods: ['list'] }
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

require('babel-register');

if (typeof process.env.NODE_ENV === 'undefined' ||
  process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

const keystone = require('keystone');
const Email = require('keystone-email')
const engine = require('express-handlebars');

keystone.init({
  name: 'Act On This CMS',
  brand: 'ActOnThis',
  favicon: './favicon.ico',
  less: 'dist',
  static: 'dist',
  views: './template/',
  'custom engine': engine({ extname: '.hbs' }),
  'view engine': 'hbs',
  'auto update': true,
  mongo: process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/act-on-this',

  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET || 'demo',
});

keystone.set('cloudinary config', 'cloudinary://875343934168781:pD7Lbb9l6TtGixu3zSnESTt33i8@mattc' );
keystone.set('cloudinary prefix', 'actonthis');
keystone.set('cloudinary folders', true);
keystone.set('cloudinary secure', true);

keystone.set('google api key', 'AIzaSyAZXY77aglmg1UXo7yHJs6xsRVaO9dvQnY');
keystone.set('google server api key', 'AIzaSyAZXY77aglmg1UXo7yHJs6xsRVaO9dvQnY');
keystone.set('default region', 'us');

// Let keystone know where your models are defined. Here we have it at the `/models`
keystone.import('models/');

// This is where your normal routes and files are handled
keystone.set('routes', require('./server'));

keystone.start();

// Email.send(
// 'test.hbs',
// {
//   root: './emails/',
//   engine: engine({ extname: '.hbs' }),
//   transport: 'mailgun',
//   apiKey: 'key-4a0a48c33d7c0e618e744fab818b2c7d',
//   domain: 'mg.actonthis.org'
// },
// {},
// {
//   subject: 'Test Email',
//   to: 'mdc09321@gmail.com',
//   from: {
//     name: 'Tester',
//     email: 'hello@actonthis.org'
//   }
// },
// function (err, result) {
//   if (err) {
//     console.error('🤕 Mailgun test failed with error:\n', err);
//   } else {
//     console.log('📬 Successfully sent Mailgun test with result:\n', result);
//   }
// });

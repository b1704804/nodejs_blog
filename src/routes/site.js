const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController');

//newsController.index

route.use('/search', siteController.show);
route.use('/', siteController.index);

module.exports = route;
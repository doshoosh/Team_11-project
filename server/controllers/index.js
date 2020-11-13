let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//home page
module.exports.displayHomePage = (req, res, next) => {
  res.render('home', { title: 'Survey Website', slug: 'home' });
};

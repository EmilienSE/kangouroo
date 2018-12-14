const express = require('express');
const router = express.Router();
const models = require('../models');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kangouroo' });
});

router.post('/search/', function(req, res, next) {
	
	res.redirect('/users/login');
});

module.exports = router;

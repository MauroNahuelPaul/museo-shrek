var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('museo', { title: 'Museo de Shrek' });
});

module.exports = router;
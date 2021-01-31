var express = require('express');
var router = express.Router();

const port = process.env.PORT || 8000;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '動物おみくじ' });
});

module.exports = router;

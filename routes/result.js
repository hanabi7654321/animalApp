var express = require('express');
var router = express.Router();


/* GET result page. */
router.get('/', function(req, res, next) {
  const animals = ["あざらし", "ねこ", "いぬ", "パンダ", "ペンギン"];
  const num = Math.floor(Math.random() * animals.length) + 1;
  const animal = animals[num];
  const animalImg = "public/images/pic1" ;
  res.render('result', { 
    root: animal,
  });
});

module.exports = router;

// animalImg: animalImg
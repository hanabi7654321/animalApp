var express = require('express');
var router = express.Router();


/* GET result page. */
router.get('/', function(req, res, next) {
  const animals = ["あざらし", "バッファロー", "いぬ", "きりん", "ペンギン", "きつね", "ひつじ", "うし"];
  let num = Math.floor(Math.random() * animals.length);
  let animal = animals[num];
  const contents = ["デートは水族館へ", "GO! GO!","PUGは特におすすめです", "草食系で過ごそう", "旭山動物園へGO！", "ラッキーアイテムはきつねうどん！", "ラッキーアイテムはジンギスカン！", "牛乳を飲むとカルシウムが摂れるよ！"];
  let content = contents[num];
  let imgnum = num ;
  res.render('result', { 
    result: animal,
    content: content,
    imgnum: imgnum
  });
});

module.exports = router;


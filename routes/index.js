var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/news/', function(req, res, next){
	res.sendfile('./models/news_mock.json');
});


module.exports = router;

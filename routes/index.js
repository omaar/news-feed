var express = require('express');
var router = express.Router();
var fs = require('fs');
//var api = require('api');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/news/', function(req, res, next){

//-TODO Descomentar para realizar la peticion con el archivo "news_mock.json"
	fs.readFile('./models/news_mock.json', 'UTF8', function(err, data) {
		res.send(JSON.parse(data));
	});

//-TODO Descomentar para realizar la peticion con url
	// var url = 'https://gist.githubusercontent.com/omaar/6b5fae5c45c187ec89c4/raw/1d047f1b2e95fbcfec55859f7f1736397ffbb2ce/news_mock.json';
	// request(url, function(err, response, body) {
	// 	res.send(body);
	// });
});

module.exports = router;

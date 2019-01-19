var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'sick dab', condition: true, anyArray: [1,2,3] });
});

router.get('/test/:total', function(req, res, next) {
  res.render('test', {output: req.params.total});
});

router.post('/test/submit', function(req, res, next) {
	var lat = req.body.lat;
	var lon = req.body.lon;
	var lat2 = req.body.lat2;
	var lon2 = req.body.lon2;
	var R = 6371;                     //kilos of Earth radius
var φ1 = toRadians(lat);
var φ2 = toRadians(lat2);
var deltaφ = toRadians(lat2-lat);
var deltaλ = toRadians(lon2-lon);        //the formula doesn't calc in degs

var a = Math.sin(deltaφ/2) * Math.sin(deltaφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(deltaλ/2) * Math.sin(deltaλ/2);
		
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var total = R * c; 

function toRadians(degrees)
{
	return degrees * Math.PI * (1/180) 
	} 

	// var total = Number(lat) + Number(lon) + Number(lat2) + Number (lon2)
    res.redirect('/test/' + total);
});

module.exports = router;

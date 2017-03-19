'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var whereareyou = position.coords.latitude + ' ,' + position.coords.longitude
        alert(whereareyou)
    })
}

module.exports = router;

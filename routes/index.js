'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Expres5555s' });
    res.render('index', { proximity: '=proximity' });
});

if ('ondeviceproximity' in global) {
    // Fired when object is in the detection zone
    global.addEventListener('deviceproximity', function (event) {
        // Object distance in centimeters
        console.log(event.value + " centimeters")
    })
} else {
    console.log("deviceproximity not supported")
    
}

module.exports = router;

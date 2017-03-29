'use strict';
var express = require('express');
var router = express.Router();

var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: 1505555353,
    channelSecret: d77d29c78fd97d14a10a483ec924d433,
    channelAccessToken: V2TrUMDraUjqc8d / xnT0Zc41vhSRYmd + 8njajWaekZ2B3jqttnyRZ5XrKRt37tUX0TmziPPYDJlrFk8/WhxLA4vL650Bv7c2gWoeHy/kdAZ7XIk3MNdm9M0nqhD6LALazU2PE9PC2vXKrRw/ ZRpF7QdB04t89 / 1O/w1cDnyilFU=
});

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

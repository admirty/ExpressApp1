'use strict';
var linebot = require('linebot');
var express = require('express');
var router = express.Router();

var bot = linebot({
    channelId: 1505555353,
    channelSecret: d77d29c78fd97d14a10a483ec924d433,
    channelAccessToken: V2TrUMDraUjqc8d/xnT0Zc41vhSRYmd+8njajWaekZ2B3jqttnyRZ5XrKRt37tUX0TmziPPYDJlrFk8/WhxLA4vL650Bv7c2gWoeHy/kdAZ7XIk3MNdm9M0nqhD6LALazU2PE9PC2vXKrRw/ZRpF7QdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function (event) {
    console.log(event); //把收到訊息的 event 印出來看看...
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

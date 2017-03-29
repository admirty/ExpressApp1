var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1505555353,
  channelSecret: d77d29c78fd97d14a10a483ec924d433,
  channelAccessToken: V2TrUMDraUjqc8d / xnT0Zc41vhSRYmd + 8njajWaekZ2B3jqttnyRZ5XrKRt37tUX0TmziPPYDJlrFk8/WhxLA4vL650Bv7c2gWoeHy/kdAZ7XIk3MNdm9M0nqhD6LALazU2PE9PC2vXKrRw/ ZRpF7QdB04t89 / 1O/w1cDnyilFU=
});

bot.on('message', function (event) {
    console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


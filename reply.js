var linebot = require('linebot');
var express = require('express');
 
var bot = linebot({
    channelID: '1543065394',
    channelSecret: '87cfa36f04eddf93e30c663391f91dd3',
    channelAccessToken: 'AXs02TFl/f3JAwGiua2e1bcfhISBz4HNaS/3lm7MVaNbQFwdiomdQO7nC2XN0d7xfXnLdEpHR8ByXgFlIb19yz+VrKptcNECLO1ITsljSyZKsFUijmNh/WPhU/nnL17dOU4fEqruSPs4F4bEbrfAGAdB04t89/1O/w1cDnyilFU=
'
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {  //heroku聽預設port；local端聽8080
  var port = server.address().port;
  console.log("App now running on port", port);
});
 
bot.on('message', function (event) {
	var userMsg = event.message.text; //取得使用者輸入的文字
    event.reply(userMsg).then(function (data) {  //機器人回覆同樣的話
        console.log('userMsg = ' + userMsg); 
    }).catch(function (error) {
        console.log('error');
    });
});
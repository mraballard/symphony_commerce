var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var path        = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded);
app.use(express.static(path.join(__dirname,'public')));

app.use(function(req, res) {
  res.render('/');
});

app.listen(3000, function() {
  console.log("SERVER LISTENING ON PORT 3000");
});

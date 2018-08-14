var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('This is Homepage!');
});

app.get('/contacts', function(req, res){
  res.send('This is Contacts Page!');
});

app.listen(3000);

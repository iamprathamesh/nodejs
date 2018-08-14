var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.writeHead(200, {'Content-Type': 'video/mp4'})
  var recieved = fs.createReadStream(__dirname + '/whale.mp4');
  recieved.pipe(res);
  //res.render('home');
});

app.get('/contacts', function(req, res){
  res.render('contacts');
});

app.get('/contacts/:number', function(req, res){
  res.send('This is Contacts Page and your contact no. is: ' + req.params.number);
});

app.get('/person/:name', function(req, res){
  var data = {age: 22, job: 'Finance', hobbies: ['pool', 'pubg', 'carrom']};
  res.render('home', {person: req.params.name, data: data});
});

app.listen(3000);

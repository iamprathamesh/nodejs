var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request made: ' + req.url);
  var recieved = fs.createReadStream(__dirname + '/readfile.txt', 'utf8');
  recieved.pipe(res);
});

server.listen(3000, 'localhost');
console.log('We are now LIVE!');

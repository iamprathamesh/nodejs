var http = require('http');

var server = http.createServer(function(req, res){
  console.log('Request made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey Dudes!');
});

server.listen(3000, 'localhost');
console.log('We are now LIVE!');

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request made: ' + req.url);

  if(req.url === '/home' || req.url === '/') {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    var recieved = fs.createReadStream(__dirname + '/index.html', 'utf8');
    recieved.pipe(res);
  } else {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    var recieved = fs.createReadStream(__dirname + '/404.html', 'utf8');
    recieved.pipe(res);
  }
});

server.listen(3000, 'localhost');
console.log('We are now LIVE!');

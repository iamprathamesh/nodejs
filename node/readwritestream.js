var fs = require('fs');

var recieved = fs.createReadStream(__dirname + '/readfile.txt', 'utf8');
var toWrite = fs.createWriteStream(__dirname + '/writefile.txt');

recieved.on('data', function(chunk){
  console.log('chunk recieved');
  toWrite.write(chunk);
});

var fs = require('fs');

//Synchronous - Blocking Code
var read = fs.readFileSync('readfile.txt', 'utf8');

fs.writeFileSync('writefile.txt', read);

//Asynchronous - Non-Blocking Code
fs.readFile('readfile.txt', 'utf8', function(err, data){
  fs.writeFile('writefile.txt', data, function(err1, data1){});

});

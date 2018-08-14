var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

//fire controllers
todoController(app);

app.listen(3001);
console.log('Now Live on Port 3000');

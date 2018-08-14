var express = require('express');
var playerController = require('./controllers/playerController');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

playerController(app);

app.listen(3000);

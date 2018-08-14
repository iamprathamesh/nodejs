var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://iamprathamesh:prathamesh89@ds219532.mlab.com:19532/music', { useNewUrlParser: true })
mongoose.plugin(require('mongoose-regex-search'));

var urlencodedParser = bodyParser.urlencoded({extended: false});

var songSchema = new mongoose.Schema({
  songId: String,
  songName: String,
  songImage: String,
  songUrl: String,
  songArtist: String
});

var Song = mongoose.model('Song', songSchema);



module.exports = function(app){

  app.get('/', function(req, res){
    Song.findOne({"songName":"song1"}, function(err, data){
      res.render('player', {song: data});
    });
  });

  app.get('/insert', function(req, res){
    Song({"songId": "2","songName": "song1", "songImage": "/images/song1.jpeg", "songUrl": "/songs/song1.mp3"}).save(function(err, data){
      if(err) throw err;
      console.log('Document Inserted Sucessfully');
    });
  });

  app.post('/search', urlencodedParser ,function(req, res){
    Song.search({"songName": req.body.songName}, function(err, data){
      if (err) throw err;
      //res.json(data[1]);
      res.render('searchlist', {song: data});
    });
  });

  app.get('/search/song/:songid', function(req, res){
    Song.findOne({"songId": req.params.songid}, function(err, data){
      if(err) throw err;
      res.render('player', {song: data});
    });
  });

  app.get('/projects', function(req, res){
    res.render('projects');
  });

  app.get('/about', function(req, res){
    res.render('about');
  });

};

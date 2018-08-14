var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://iamprathamesh:prathamesh89@ds217002.mlab.com:17002/todo', { useNewUrlParser: true });

//var data = [{item: 'hey hello'}, {item: 'how are you?'}, {item: 'wanna catch up!'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
//var itemOne = Todo({item: 'First Item'}).save(function(err){
//  if (err) throw err;
//  console.log('Item Saved');
//});

module.exports = function(app){

  app.get('/todo', function(req, res){
    Todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
      console.log(req.body);
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

};

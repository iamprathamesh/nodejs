var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(Person){
  Person.on('speak', function(msg){
    console.log(Person.name + ' Said: ' + msg);
  });
});

james.emit('speak', 'Hi all!');
mary.emit('speak', 'Hi');

var counter = function(array) {
  return array.length;
};

var adder = function(a,b) {
  return `The sum of the two numbers is ${a+b}`;
};

var pi = 3.14;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};

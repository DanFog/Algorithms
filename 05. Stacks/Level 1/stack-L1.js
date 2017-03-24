
/*

  Your objective is to implement a stack without using any built-in features.

    [x] Complete the implementation of a Stack class
    [x] .storage property to hold the items on the stack
    [x] .push() function to push a value onto the stack
    [x] .pop() function to pop a value off the stack
    [x] .length property to return the current length

  NOTE: Do not use any built-in features
  NOTE: Do not focus on edge cases or error conditions

*/

var Stack = function() {
  this.storage = [];
  this.length = 0;
};

Stack.prototype.push = function(value) {
  this.store[length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  var store = [];
  for(var i = 0; i < this.length-1; i++) {
    store.push(this.storage[i]);
  }
  this.storage = store;
  this.length--;
};
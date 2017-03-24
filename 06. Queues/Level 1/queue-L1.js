
/*

 Your objective is to implement a queue without using any built-in features.

 [ ] Complete the implementation of a Queue class
 [x] .storage property to hold the items on the queue
 [x] .enqueue() function to queue up a value
 [x] .dequeue() function to dequeue a value
 [x] .length property to return the current length

 NOTE: Do not use any built-in features
 NOTE: Do not focus on edge cases or error conditions

 */

var Queue = function() {
  this.storage = [];
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var array = [];
  var value = this.storage[0];
  for(var i = 1; i < this.length; i++) {
    array.push(this.storage[i]);
  }
  this.storage = array;
  this.length--;
  return value;
};




// A Vector is a dynamic array that expands in size when it fills up and needs more space, and
//  reduces size when elements are removed and a certain amount of space is wasted.
//
// NOTE: In all cases, if the index is out of bounds, throw an error.
// NOTE: Must implement from scratch, cannot create a direct wrapper around built-in functionality
//
// [ ] implement a Vector class with the following functions
// [ ] .insert() function that takes an index and value to insert
// [ ] .add() function to append a value to the end of the array
// [ ] .remove() function to remove whatever value at index
// [ ] .get() function to return value at index
// [ ] .set() function to set value at index
//
// [ ] .contains() function to return true/false whether a given value exists in the Vector
//

var Vector = function(initialCapacity, maxCapacity) {
  this.storage = [];
  this.capacity = 16;  // Default to array size 16
  this.max = 1 << 24;      // Default to max Vector size 16,777,216
  this.length = 0;
};

Vector.prototype.checkBounds = function(index){
  if (index < 0 || index > this.length){
    console.log('error. index out of bounds');
    return false;
  }
  return true;
};

Vector.prototype.insert = function(index, value) {
  if (!this.checkBounds(index)) {
    return;
  }
  var newArray = [];
  for (var i = 0; i < index; i++){
    newArray[i] = this.storage[i];
  }
  newArray[i] = value;
  for (var i = index + 1; i <= this.storage.length; i++){
    newArray[i] = this.storage[i-1];
  }
  this.storage=newArray;
  this.length++;
  return newArray;
};

Vector.prototype.add = function(value) {
  if (this.storage.length){
    this.storage[this.storage.length] = value;
  }
  else{
    this.storage[0] = value;
  }
  this.length++;
  return this.storage;
};

Vector.prototype.remove = function(index) {
  if (!this.checkBounds(index)){
    return;
  }

  for (var i = index; i < this.storage.length; i++ ){
    this.storage[i] = this.storage[i+1];
  }
  var newArray = [];
  for (var v = 0; v < this.storage.length-1; v++){
    newArray[v] = this.storage[v];
  }
  this.storage = newArray;
  this.length--;
  return this.storage;
};

Vector.prototype.get = function(index) {
  if (!this.checkBounds(index)){
    return;
  }
  return this.storage[index];
};

Vector.prototype.set = function(index, value) {
  if (!this.checkBounds(index)){
    return;
  }
  if (index < this.storage.length && index > 0){
    this.storage[index] = value;
  }
};



var v = new Vector();
v.add(1);
v.add(2);
v.add(3);
console.log("v.length: " + (v.length === 3));
v.add(4);
v.add(5);
v.insert(2, 10);
console.log("v.length: " + (v.length === 6));
console.log("v.get(2): " + (v.get(2) === 10));
v.set(2, 15);
console.log("v.set(2, 15): " + (v.get(2) === 15));
v.remove(2);
console.log("v.remove(2): " + (v.length === 5));

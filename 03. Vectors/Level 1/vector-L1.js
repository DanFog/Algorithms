
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
  this.capacity = initialCapacity || 16;  // Default to array size 16
  this.max = maxCapacity || 1 << 24;      // Default to max Vector size 16,777,216
  this.length = 0;
};

Vector.prototype.checkCapacityUpper = function(){
  if(this.length + 1 > this.max){
    console.log('error! exceeded maximum memory usage');
    return false;
  }else if (this.length + 1 > this.capacity){
    this.capacity *= 2;
  }
  return true;
};

Vector.prototype.checkCapacityLower = function(){
  if(this.capacity > 16 && this.length - 1 <= this.capacity/4){
    this.capacity = this.capacity/2;
  }
};

Vector.prototype.checkBounds = function(index){
  if (index < 0 || index > this.length){
    console.log('error. index out of bounds');
    return false;
  }
  return true;
};

Vector.prototype.insert = function(index, value) {
  if (!this.checkBounds(index) || !this.checkCapacityUpper()){
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
  if (!this.checkCapacityUpper()){
      return;
  }
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
  this.checkCapacityLower();
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
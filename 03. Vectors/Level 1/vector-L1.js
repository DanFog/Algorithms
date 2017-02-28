
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

console.log("Initialize");
console.log("  v.length should be 0: " + (v.length === 0));
console.log("  v.capacity should be 8: " + (v.capacity === 8));
console.log("  v.max should be 32: " + (v.max === 32));
console.log("  v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));

console.log("Add 3");
v.add(0);
v.add(1);
v.add(2);
console.log("  v.length should be 3: " + (v.length === 3));
console.log("  v.toArray() should be [0, 1, 2]: " + (v.toArray().equals([0, 1, 2])));

console.log("Add 2 more");
v.add(3);
v.add(4);
console.log("  v.length should be 5: " + (v.length === 5));
console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));

console.log("Insert 1 at v[3]");
v.insert(3, 2.5);
console.log("  v.length should be 6: " + (v.length === 6));
console.log("  v.toArray() should be [0, 1, 2, 2.5, 3, 4]: " + (v.toArray().equals([0, 1, 2, 2.5, 3, 4])));

console.log("Remove v[3]");
v.remove(3);
console.log("  v.length should be 5: " + (v.length === 5));
console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));

console.log("Set v[2] = 15");
v.set(2, 15);
console.log("  v.get(2) should be 15: " + (v.get(2) === 15));

console.log("Add 4 more");
v.add(5);
v.add(6);
v.add(7);
v.add(8);
console.log("  v.length should be 9: " + (v.length === 9));
console.log("  v.capacity should be 16: " + (v.capacity === 16));

console.log("Remove from the end");
v.remove();
console.log("  v.toArray() should be [0, 1, 15, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 15, 3, 4, 5, 6, 7])));

console.log("Remove v[2]");
v.remove(2);
console.log("  v.toArray() should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));

console.log("Remove the first");
v.remove(0);
console.log("  v.toArray() should be [1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([1, 3, 4, 5, 6, 7])));
console.log("  v.length should be 6: " + (v.length === 6));
console.log("  v.capacity should be 8: " + (v.capacity === 16));

console.log("Insert one at the beginning");
v.insert(0, 0);
console.log("  Insert 0 at v[0] should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));

console.log("Remove from beginning");
v.remove(0);
console.log("  v.remove(0) should be [1, 3, 4, 5, 6, 7]: " + v.toArray().equals([1, 3, 4, 5, 6, 7]));
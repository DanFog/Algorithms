
// [ ] Implement LinkedList class
// [ ] .insert() function to insert data at position (0 = Head, null = Tail, other = middle somewhere)
// [ ] .remove() function to remove data at position (0 = Head, empty = Tail, other = middle somewhere)
// [ ] .get() function to return data at position indicated
// [ ] .set() function to change existing data at position indicated
// [ ] .find() function to return first node containing the value indicated
// [ ] .contains() function to return true/false whether the value exists
//
// [ ] Write a function to return the average of all even values in a Linked List that contains integer
//      data only.
//
var LinkedListNode = function(data, next) {
  this.data = data;
  this.next = next;
};

var LinkedList = function() {
  this.head = new LinkedListNode(null, null);
  this.tail = this.head;
  this.length = 0;
};

LinkedList.prototype.insert = function(index, value) {
  if(index > this.length) {
    return false;
  }
  if(index == 0) {
    if(this.length == 0) {
      this.head.data = value;
      this.length++;
      return true;
    }
    var newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
    return true;
  }
  var node = this.head;
  for(var i = 0; i < index; i++) {
    node = node.next;
  }
  if(index == this.length) {
    this.length++
    var newNode = new LinkedListNode(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
    return true;
  }
  var newNode = new LinkedListNode(value, node.next);
  node.next = newNode;
  this.length++;
};

LinkedList.prototype.remove = function(index) {
  var node = this.head;
  for(var i = 0; i < index-1; i++) {
    node = node.next;
  }
  node.next = node.next.next;
  this.length--;
};

LinkedList.prototype.get = function (index) {
  var node = this.head;
  for(var i = 0; i < index; i++) {
    node = node.next;
  }
  return node.next;
};

LinkedList.prototype.set = function(index, value) {
  var node = this.head;
  for(var i = 0; i < index; i++) {
    node = node.next;
  }
  node.data = value;
};

LinkedList.prototype.find = function(value) {
  var newNode = this.head;
  var index = this.length
  while(index > 0) {
    if(newNode.data == value) {
      return newNode;
    }
    newNode = newNode.next;
    index--;
  }
  return false;
};

LinkedList.prototype.contains = function(value) {
  var node = this.head;
  for(var i = 0; i < this.length; i++) {
    if(node.data == value) {
      return true;
    }
  }
  return false;
};

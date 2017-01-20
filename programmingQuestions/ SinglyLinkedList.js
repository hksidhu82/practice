function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
}

function SinglyLinkedListNode(data, nextNode) {
  this.data = data;
  this.nextNode = nextNode;
}

SinglyLinkedList.prototype.appendNode = function(data) {
  var self = this;
  
  var newNode = new SinglyLinkedListNode(data, null);
  
  if (self.tail) {
    self.tail.nextNode = newNode;
    self.tail = newNode;
    self.head = self.head;
  } else {
    self.tail = newNode;
    self.head = newNode;
  }
}


SinglyLinkedList.prototype.reverse = function() {
  var self = this;
  
  var currentNode = self.head;
  var next = null;
  var prev = null;
  
  while (currentNode) { 
    next = currentNode.nextNode;
    currentNode.nextNode = prev; 
    prev = currentNode;
    currentNode = next;
  }
  
  self.head = prev;
  return self.head;
};

//SinglyLinkedList.prototype.seen = false;
SinglyLinkedList.prototype.hasLoop = function() {
  var self = this;
  
  var current = self.head;
  while (current) {
    if (current.seen) {
        return true;
    } else {
      current.seen = true;
      current = current.nextNode;
    }
  }
  
  return false;
};


SinglyLinkedList.prototype.createLoop = function() {
  var self = this;
  
  var tail = self.tail;
  tail.nextNode = self.head;
};
var sll = new SinglyLinkedList();

sll.appendNode("1");
sll.appendNode("2");
sll.appendNode("3");
sll.appendNode("4");
sll.appendNode("5");
sll.appendNode("6");
sll.appendNode("7");
sll.createLoop();
// sll.appendNode("3");
// sll.appendNode("2");
// sll.appendNode("1");
console.log(sll);
console.log(sll.reverse());
console.log(sll.hasLoop());''
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(data, nextNode, prevNode) {
  this.data = data;
  this.nextNode = nextNode;
  this.prevNode = prevNode;
}

LinkedList.prototype.appendNode = function(data) {
  var newNode;
  
  if (this.tail) {
    newNode = new Node(data, null, this.tail);
    this.tail.nextNode = newNode;
    this.tail = newNode;
  } else {
    newNode = new Node(data, null, null);
    this.tail = newNode;
    this.head = newNode;
  }
}

LinkedList.prototype.searchNode = function(data) {
  var currentNode = this.head;
  
  while (currentNode.nextNode) {
    if (currentNode.data === data) {
      return currentNode;
    }
      currentNode = currentNode.nextNode;
  }
  
  return "Node not found";
}

LinkedList.prototype.deleteNode = function(data) {
  var currentNode = this.head;
  
  while (currentNode.nextNode) {
    if (currentNode.data === data) {
      currentNode.nextNode.prevNode = currentNode.prevNode;
      currentNode.prevNode
    }
      currentNode = currentNode.nextNode;
  }
  
  return "Node not found";
}

// 1-2-3-4-3-2-1
// 1-5-6-7-3
LinkedList.prototype.isPalindrome = function() {
  var head = this.head;
  var tail = this.tail;
  
  var start = head;
  var end = tail;
  console.log(start);
  console.log(end);
  console.log("****");
  while (start && end) {
     if (start.data === end.data) {
      console.log(start.data);
      console.log(end.data);
       start = start.nextNode;
       end = end.prevNode;
       console.log("ok " + start + end);
     }
     else {
       return "0";
     }
  }
  
  return "1";
}

var ll = new LinkedList();

ll.appendNode("1");
ll.appendNode("2");
ll.appendNode("3");
ll.appendNode("4");
ll.appendNode("3");
ll.appendNode("2");
ll.appendNode("1");
ll.isPalindrome();

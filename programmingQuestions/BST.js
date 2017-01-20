function BST(value) {
	this.left = null;
	this.right = null;
	this.value = value;
}

BST.prototype.insert = function(value) {
	// if empty ie no value > set value
	//if value is less than root > set this to left child 
	
		if (this.value > value) {
		  if (!this.left) {
		    this.left = new BST(value);
		  } else {
		    this.left.insert(value);
		  }
		} else if (this.value < value){
			  if (!this.right) {
  		    this.right = new BST(value);
  		  } else {
  		    this.right.insert(value);
  		  }
  	} 
}

BST.prototype.search = function(value) {
// check woth root if less than root search in left bst
  if(this.value > value) {
    if(this.left) {
      return this.left.search(value);
    } 
    if (!this.left) return "Not found";
  } else if(this.value < value) {
    if (this.right) {
      return this.right.search(value);
    } 
    if (!this.right) return "Not found";
  } else if (this.value === value) {
    return value;
  }
}

BST.prototype.depthFirstTraversal = function() {
// cover each and every node > cover left and right BST 
  if(this.value) {
   if (this.left) {
        this.left.depthFirstTraversal();
    }
    console.log("value " + this.value); // in-order left root right
    if (this.right) {
       this.right.depthFirstTraversal();
    }
  }
}

BST.prototype.breadthFirstTraversal = function() {
// cover each and every node > cover left and right BST 
  var queue = [this];
 
  while (queue.length) {
     var root = queue.shift();
    
     if (root.left) {
          queue.push(root.left);
      }
      console.log("value " + root.value); // in-order left root right
      if (root.right) {
         queue.push(root.right);
      }
  }
}

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(35);
bst.insert(45);
bst.insert(85);
bst.insert(105);
bst.insert(10);
// console.log(bst);
// console.log(bst.search(78));
// console.log(bst.depthFirstTraversal());
console.log(bst.breadthFirstTraversal());
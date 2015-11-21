



var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTreeMethods);
  newTree.nodeValue = value;
  newTree.binaryTree = {};
  newTree.left = undefined;
  newTree.right = undefined;
  return newTree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(val) {
  var newValue = BinarySearchTree(val);
  console.log(this);
  if(newValue === this.treeNode) {
    return;
  }else if (newValue > this.treeNode) {
    if(this.treeNode.left === undefined){
      this.treeNode.left = newValue;
    }else{
      this.insert(this.treeNode.left)
    }
  }else if(this.treeNode.right === undefined){
    this.treeNode.right = newValue;
  }
  //console.log(this.treeNode.left, this.treeNode.right);
}

BinarySearchTreeMethods.contains = function(val) {
  if(val === this.treeNode) return true;
}

BinarySearchTreeMethods.depthFirstLog = function() {
  
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

//  INSERT:  tree will take a value as an argument, checks head nodes children to
//  see if the value is greater than or less than the head value... if
//  that position is taken, recurse down the tree to that node
//  
//  
//  
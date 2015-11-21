



var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTreeMethods);

  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;

  return newTree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(val) {

  // create's a new binary search tree
  var newNode = BinarySearchTree(val); 
  // console.log(this);

  var innerInsert = function(node) {
  // if newNode is less than head node

    if(newNode.value < node.value) {
  // if head node's left value is undefined
      if(node.left === undefined){
  // set head node's left value to newNode
        return node.left = newNode;
  // else
      } else {
  // recurse inner function with head node's left value
        innerInsert(node.left);
      }
  // else
    } else {
  // if head node's right value is undefined
      if(node.right === undefined){
  // set head node's right value to newNode
        return node.right = newNode;
  // else
      } else {
  // recurse inner function with head node's right value
        innerInsert(node.right);        
      }
    }
    return node;
  }
  return innerInsert(this);
}

BinarySearchTreeMethods.contains = function(val) {
  var result = false;

  var innerContains = function(node) {
    console.log(val, node.value);
    if(val === node.value) {
      result = true;
    } else if (node.value < val) {
      if(node.right === undefined) return;
      innerContains(node.right);
    } else if(node.value > val) {
      if(node.left === undefined) return;
      innerContains(node.left);
    } 
  }
  innerContains(this);
  return result;
}

BinarySearchTreeMethods.depthFirstLog = function(cb) {
  var arr = [];

  var innerDepth = function(node) {
    arr.push(node.value);
    if(node.left !== undefined) {
      innerDepth(node.left);
    }
    if(node.right !== undefined) {
      innerDepth(node.right);
    }
  }
  innerDepth(this);

  _.each(arr, function(item){
    cb(item);
  });
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
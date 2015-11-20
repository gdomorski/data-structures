var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push({value: value});
  // console.log(this)

};

treeMethods.contains = function(target) {
  _.each(this.children, function(item) {
    console.log(item.value, target)
    if(item.value === target) return true;
  })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

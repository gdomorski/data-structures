var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  (function searchFn(obj) {
    console.log(obj);
    _.each(obj.children, function(item) {item.value === target ? result = true : searchFn(item)});
  })(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

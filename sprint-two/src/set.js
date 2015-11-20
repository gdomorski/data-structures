var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  set._storage = item;
  console.log(set._storage)
  console.log(item);
};

setPrototype.contains = function(item) {
 console.log('hey')
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.graphSet = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphSet[node] = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.graphSet.hasOwnProperty(node)
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.graphSet[node];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graphSet[fromNode][toNode];
  delete this.graphSet[toNode][fromNode];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  !!this.graphSet[fromNode][toNode] || !!this.graphSet[toNode][fromNode] ? result = true : result;
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graphSet[fromNode][toNode] = toNode;
  this.graphSet[toNode][fromNode] = fromNode;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.graphSet) {
    cb(key)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



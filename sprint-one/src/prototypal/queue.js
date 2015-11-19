var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.first = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.queueSize++;
  this.storage[this.queueSize] = value;
}

queueMethods.dequeue = function() {
  if(this.queueSize - this.first > 0) {
    this.first++
    var temp = this.storage[this.first];
    delete this.storage[this.first];
    return temp;
  }
}

queueMethods.size = function() {
  return this.queueSize - this.first;
}

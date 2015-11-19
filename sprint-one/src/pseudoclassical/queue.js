var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.queueSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.queueSize++;
  this.storage[this.queueSize] = value;
}

Queue.prototype.dequeue = function() {
  if(this.queueSize - this.first > 0) {
    this.first++;
    var temp = this.storage[this.first];
    delete this.storage[this.first];
    return temp;
  }
}

Queue.prototype.size = function() {
  return this.queueSize - this.first;
}



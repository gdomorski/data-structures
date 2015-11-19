var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newqueue = {};

  newqueue.queueSize = 0;
  newqueue.queueFirst = 0;
  newqueue.storage = {};
  
  _.extend(newqueue, queueMethods)

  return newqueue;
};

var queueMethods = {};
  
queueMethods.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
}
    
queueMethods.dequeue = function(){
  if(this.queueSize - this.queueFirst >= 0) {
    var temp = this.storage[this.queueFirst];
    delete this.storage[this.queueFirst];
    this.queueFirst++; 
    if(this.queueSize - this.queueFirst < 0) this.queueSize = this.queueFirst;
    return temp;
  }
}

queueMethods.size = function(){
  return this.queueSize - this.queueFirst;
}
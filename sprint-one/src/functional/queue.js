var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    if(size > 0) first++; 

    return storage[first];
  };

  someInstance.size = function() {
    if(size - first < 0) size = first;
    return size - first;
  };

  return someInstance;
};

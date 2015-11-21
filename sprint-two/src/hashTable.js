

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  console.log('insert')
  var index = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage[index] === undefined) {
    var arr = [[k, v]];

    this._storage[index] = arr;
    console.log('inserting: ', arr, ' into: ', this._storage[index])
  } else {
    console.log('else', this._storage[index], k)
    for(var i = 0; i < this._storage[index].length; i++) {
      console.log('each loop: ',this._storage[index][i][0])
      if(this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        return;
      }
    }
    this._storage[index].push([k, v]);
    
    // var tempArr = [];
    // tempArr.push(this._storage[index][0]);
    // console.log('collided elemented: ', this._storage[index][0])
    // tempArr.push([k, v]);
    // this._storage[index] = tempArr;
    // console.log('collision detected! inserting: ', tempArr, ' into: ', this._storage[index])
  }
};

HashTable.prototype.retrieve = function(k) {
  console.log('retrieve')
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;

  if(this._storage[index].constructor === Array) {
    _.each(this._storage[index], function(item) {
      if(item[0] === k) {
        result = item[1];
      }
    })
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  console.log('remove')
  var index = getIndexBelowMaxForKey(k, this._limit);

  for(var i = 0; i < this._storage[index].length; i++) {
    if(this._storage[index][i][0] === k) {
      this._storage[index][i][1] = undefined
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// is there already a bucket at storage[hash]?
// so...I either use that bucket, or I make a new (empty) bucket
// now I check if my KEY is already in that bucket...probably by iterating through that bucket
// if that key is already there, I overwrite it's value with the new value
// otherwise, I add a new tuple of key:value to the bucket
 

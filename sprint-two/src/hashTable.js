

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  console.log('add start: ', k, v)
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] !== undefined) {
    var arr = [[k, v]];
    // console.log('add',this._storage)
    // console.log('new arr: ', arr)
    this._storage[index] = arr;
    console.log()
  } else {
    // console.log('add',this._storage)
    var tempArr = [this._storage[index][0], [k, v]];
    // tempArr.push(this._storage[index][0]);
    // tempArr.push([k, v]);
    console.log('tempArr', tempArr);
    this._storage[index] = tempArr;
    console.log('tempArr inside?: ',this._storage[index])
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  if(this._storage[index].constructor === Array) {
    _.each(this._storage[index], function(item) {
      if(item[0] = k) result = item[1];
      console.log('retrieve: ', item, result)
    })
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this._storage[index].length; i++) {
    console.log('delete: ', this._storage[index][i][0], i)
    console.log(this._storage)
    if(this._storage[index][i][0] === k) {
      this._storage[index][i][1] = undefined
      console.log('deleted: ',this._storage[index][i])
    }
    console.log(this._storage)
  }
  // _.each(this._storage[index], function(item) {
  //   console.log('remove')
  //   if(item[0] === k) {
  //     console.log('true', item[0], item, k)
  //     this._storage[index] = undefined;
  //     console.log(item)
  //   }
  // })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



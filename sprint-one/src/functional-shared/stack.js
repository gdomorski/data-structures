var Stack = function(stackSize, storage) {

  var newStack = {};
  newStack.stackSize = 0;

  newStack.storage = {};
  
  _.extend(newStack, Stack.stackMethods)

  return newStack;
};

Stack.stackMethods = {
  

  Stack.stackMethods.increment = function(){
    // console.log('this');
    this.stackSize++;
  }

  Stack.stackMethods.decrement = function(){
    return this.stackSize--;
  }

  Stack.stackMethods.push = function(value){
    // console.log('push', this.stackSize)
    this.stackSize++;
    return this.storage[stackSize] = value;
  }
      
  Stack.stackMethods.pop = function(){
    //console.log('pop', this.stackSize)
    var temp = this.storage[stackSize];
    this.stackSize--;
    delete this.storage[stackSize];
    return this.storage[stackSize];

  }

  Stack.stackMethods.size = function(){
    console.log(this.stackSize)
    if(this.stackSize < 0) this.stackSize = 0;
    return this.stackSize;
  }
}
var Stack = function() {

  var newStack = {};

  newStack.stackSize = 0;
  newStack.storage = {};
  
  _.extend(newStack, stackMethods)

  return newStack;
};

var stackMethods = {};
  
stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
}
    
stackMethods.pop = function(){
  this.stackSize--;
  var temp = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return temp;

}

stackMethods.size = function(){
  if(this.stackSize < 0) this.stackSize = 0;
  return this.stackSize;
}

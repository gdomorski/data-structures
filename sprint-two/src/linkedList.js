var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      var formerTail = this.tail;
      this.tail = Node(value);
      formerTail.next = this.tail;
    }
  };

  list.removeHead = function() {
    var formerHead = this.head;
    this.head = Node(this.head).next;
    if(this.head === null) this.head = this.tail;
    return formerHead.value;
  };

  list.contains = function(target) {
    var result = false;

    var searchFn = function(obj) {
      if(obj.value === target) result = true;
      if(this.next === undefined)
        return;
      else
        return searchFn(obj.next);
    }

    searchFn(this.tail);
    searchFn(this.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

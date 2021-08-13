class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    //for empty list
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      // for non empty list
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.tail) return null;
    var removedNode = this.tail;
    if (this.head == this.tail && this.length == 1) {
      this.head = this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;

    return removedNode;
  }

  shift() {
    if (!this.head) return null;

    var removedNode = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.tail = this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (!this.head) return null;

    var midIdx =  Math.ceil(this.length / 2);
    var counter;
    var node = null;
    //if idx close to head
    if(idx <= midIdx ){      
      counter = 0;
      node = this.head;
  
      while (node != null) {
        if (counter == idx) {
          break;
        }
        node = node.next;
        counter++;
      }
    }else{
      // if idx close to tail
      counter = this.length-1;
      node = this.tail;

      while(node != null){
        if(counter == idx){
          break;
        }
        node = node.prev;
        counter--;
      }
    }
 

    return node;
  }

  set(idx, val) {
    // if (!this.head) return false;

    var node = this.get(idx);
    if(node){
      node.val = val;
      return true;
    }
    return false;
    // var counter = 0;
    // var node = this.head;
    // while (node != null) {
    //   if (idx === counter) {
    //     node.val = val;
    //     break;
    //   }

    //   node = node.next;
    //   counter++;
    // }

  }

  insert(idx, val) {
    if(idx < 0 || idx > this.length) return false;

    var foundNode = null;
    if(idx == 0){
      return !!this.unshift(val);
    }else if(idx == this.length-1){
      return !!this.push(val);
    }else{
      var newNode = new Node(val);
      foundNode = this.get(idx);
      var left = foundNode.prev;
      var right = foundNode.next;
      newNode.prev = left, newNode.next = right;
      left.next = newNode, right.prev = newNode;
      this.length++;
      return true;
    }

    // if (!this.head) {
    //   this.head = this.tail = newNode;
    // } else {
    //   if (idx === 0) {
    //     newNode.next = this.head;
    //     this.head.prev = newNode;
    //     this.head = newNode;
    //   } else if (idx == this.length - 1) {
    //       this.tail.next = newNode;
    //       newNode.prev = this.tail;
    //       this.tail = newNode;
    //   } else {
    //     var counter = 0;
    //     var node = this.head;
    //     while (node != null) {
    //       if (counter === idx) {
    //           var left = node.prev;
    //           var right = node;
    //           left.next = newNode;
    //           newNode.next = right;
    //           right.prev = newNode;
    //           break;
    //       }

    //       node = node.next;
    //       counter++;
    //     }
    //   }
    // }
    // this.length++;
    return this;
  }

  remove(idx){
    if(idx < 0 || idx >= this.length) return false;

    if(idx == 0){
      return !!this.shift();
    }else if(idx == this.length-1){
      return !!this.pop();
    }else{
      var foundNode = this.get(idx);
      var left = foundNode.prev;
      var right = foundNode.next;
      left.next = right;
      right.prev = left;
      foundNode.next = foundNode.prev = null;
      this.length--;
      return true;
    }

    // var removed = null;
    // if(idx == 0){
    //   removed = this.head;
    //   this.head = removed.next;
    //   this.head.prev = null;      
    // }else if(idx == this.length-1){
    //   removed = this.tail;
    //   this.tail = removed.prev;
    //   this.tail.next = null;      
    // }else{
    //   var counter = 0;
    //   var node = this.head;

    //   while(node != null){
    //     if(idx == counter){
    //       removed = node;
    //       var left = node.prev;
    //       var right = node.next;

    //       left.next = right;
    //       right.prev = left;
    //     }


    //     node = node.next;
    //     counter++;
    //   }
    // }

    // this.length--;
    // removed.next = removed.prev = null;

    // return removed;
  }

  reverse(){
    if(!this.head) return this;

    [this.head, this.tail] = [this.tail, this.head];
    var node = this.head;
    while(node != null){
      [node.prev, node.next] = [node.next, node.prev];
      node = node.next;
    }
    return this;
  }
  
  print() {
    var node = this.head;
    const arr = [];
    while (node != null) {
      arr.push(node.val);
      node = node.next;
    }

    return arr;
  }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(100);
doublyLinkedList.push(200);
doublyLinkedList.push(300);
doublyLinkedList.push(400);

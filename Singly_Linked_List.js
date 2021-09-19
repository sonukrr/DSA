class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    var oldTail = this.tail;
    var current = this.head;
    var newTail = current;

    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;

    return oldTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    var current = this.head;
    var counter = 0;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(idx, val) {
    var foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    if (idx === 0) {
      return !!this.unshift(val);
    } else if (idx === this.length) {
      return !!this.push(val);
    } else {
      var newNode = new Node(val);
      var prevNode = this.get(idx - 1);
      var temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }

  remove(idx){
      if(idx < 0 || idx >= this.length) return false;
      if(idx === 0) return this.shift();
      if(idx === this.length-1) return this.pop();

      var found = this.get(idx);
      if(found){
          var prev = this.get(idx - 1);
          prev.next = found.next;
          this.length--;
          return found;
      }
  }

  reverse(){
      if(!this.head) return this;

      [this.head, this.tail] = [this.tail, this.head];
      
      var prev = null;
      var node = this.tail;
      var next;      
    
      var counter = 0;
      while(counter < this.length){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
          counter++;
      }

      return this;
  }

  print(){
      const arr = [];
      var current = this.head;
      while(current){
          arr.push(current.val);
          current = current.next;
      }
      return arr;
    }

    //can also be done via set in O(n) time
    removeDuplicates(){
      if(!this.head) return null;
      var current = this.head;
      const lookUpObj = {};

      while(current){
        lookUpObj[current.val] = (lookUpObj[current.val] || 0) + 1;
        current = current.next;
      }

      for(const key in lookUpObj){
        let count = lookUpObj[key];
        while(count !== 1){
          let dupNodeIdx = this.search(key);
          if(dupNodeIdx){
            this.remove(dupNodeIdx);
            count--;
          }
        }
      }


      return this;
    }

    search(val){
      if(!this.head) return null;

      var foundIdx = -1;
      var counter = -1;
      var current = this.head;
      while(current){
        counter++;
        //not breaking out to find last found element
        if(current.val == val){
          foundIdx = counter;
        }
        current = current.next;
      }

      return foundIdx;

    }

    rotate(idx){
      if(idx >= this.length) return undefined;
      if(this.length == 1) return this;
      if(idx < 0) idx = this.length + idx;
      var left, right, curr;
      var counter = 0;
      curr = this.head;
      while(idx != counter){
        left = curr;
        right = curr.next;
        curr = curr.next;
        counter++;
      }

      this.tail.next = this.head;
      this.head = right;
      left.next = null;
      this.tail = left;
      return this;
    }
}

var singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(10);
// singlyLinkedList.push(20);
// singlyLinkedList.push(30);
// singlyLinkedList.push(40);
// singlyLinkedList.push(30);
// singlyLinkedList.push(40);
// singlyLinkedList.push(50);
// singlyLinkedList.push(30);
// singlyLinkedList.push(40);
// singlyLinkedList.push(50);

// singlyLinkedList.pop();
// singlyLinkedList.pop();
// singlyLinkedList.pop();
console.log(singlyLinkedList.print());

// console.log(singlyLinkedList.rotate(2));
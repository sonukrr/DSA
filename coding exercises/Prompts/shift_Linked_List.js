class LinkedList{
    constructor(val){
        this.head = val;
        this.next = null;
    }
}

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// TC - O(n), SC - O(1)
function shiftLinkedList(head, k) {
  var listLength = 1;
  var listTail = head;
  while (listTail.next) {
    listTail = listTail.next;
    listLength++;
  }

  var offset =  Math.abs(k) % listLength;
  if (offset == 0) return head;
  var newTailPosition = k > 0 ? listLength - offset : offset;
  
  var newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }
    
  const newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;

  return newHead;
}

var sll = new LinkedList(0);
sll.next = new Node(1);
sll.next.next = new Node(2);
sll.next.next.next = new Node(3);
sll.next.next.next.next = new Node(4);
sll.next.next.next.next.next = new Node(5);

console.log(shiftLinkedList(sll, 2));



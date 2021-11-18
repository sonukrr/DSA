// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TC - O(max(m,n)), SC - O(max(m,n))
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const dummyHead = new Node(-1);
  var currDummy = dummyHead;
  let carry = 0;
  while (linkedListOne || linkedListTwo || carry) {
    let sum =
      carry +
      (linkedListOne ? linkedListOne.value : 0) +
      (linkedListTwo ? linkedListTwo.value : 0);
    let val = sum % 10;
    carry = Math.floor(sum / 10);
    currDummy.next = new Node(val);
    currDummy = currDummy.next;
    if (linkedListOne) linkedListOne = linkedListOne.next;
    if (linkedListTwo) linkedListTwo = linkedListTwo.next;
  }

  return dummyHead.next;
}

var sll1 = new LinkedList(2);
sll1.next = new Node(4);
sll1.next.next = new Node(7);
sll1.next.next.next = new Node(1);

var sll2 = new LinkedList(9);
sll2.next = new Node(4);
sll2.next.next = new Node(5);

console.log(sumOfLinkedLists(sll1, sll2));

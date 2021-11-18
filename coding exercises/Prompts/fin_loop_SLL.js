class LinkedList {
  constructor(val) {
    this.value = value;
    this.next = null;
  }
}

// TC- O(n), SC - O(1)
function findLoop(head) {
  var first = head.next;
  var second = head.next.next;
  while (first != second) {
    first = first.next;
    second = second.next.next;
  }

  first = head;
  while (first != second) {
    first = first.next;
    second = second.next;
  }

  return first;
}

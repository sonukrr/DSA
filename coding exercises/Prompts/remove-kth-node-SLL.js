class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TC - O(n), SC - O(1)
function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;
  let count = 1;
  while (count <= k) {
    second = second.next;
    count++;
  }
  if(second == null){
    // removing head
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while(second.next != null){
    first = first.next;
    second = second.next;
  }

  first.next = first.next.next;
}

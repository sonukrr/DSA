function reverseLinkedList(head) {
    var prev = null;
    var curr = head;
    var next = head.next;
    while(curr){
        curr.next = prev;
        curr = next;
        prev = curr;
    }

    return prev;
  }
  
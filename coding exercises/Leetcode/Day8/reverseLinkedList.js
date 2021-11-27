function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseLinkedList = function (head) {
  if (head == null || head.next == null) return head;
  var prev = null;
  var curr = head;
  var next;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

var ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);
ll.next.next.next.next = new ListNode(5);
ll.next.next.next.next.next = new ListNode(6);
ll.next.next.next.next.next.next = new ListNode(7);

console.log(reverseLinkedList(ll));

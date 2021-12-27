function ListNode(val) {
  this.node = val;
  this.next = null;
}
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var sumLinkedList = new ListNode(-1);
  var curr = sumLinkedList;

  var carry = 0;
  while (l1 || l2) {
    let sum = carry;
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    curr = curr.next;
  }

  if (carry != 0) {
    curr.next = new ListNode(carry);
  }

  return sumLinkedList.next;
};

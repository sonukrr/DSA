//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head == null || head.next == null) return head;

  var odd = head;
  var even = head.next;

  var currOdd = odd;
  var currEven = even;

  while (currOdd.next != null && currEven.next != null) {
    currOdd.next = currOdd.next.next;
    currEven.next = currEven.next.next;

    currOdd = currOdd.next;
    currEven = currEven.next;
  }

  currOdd.next = even;

  return odd;
};

var tree = new ListNode(1);
tree.next = new ListNode(2);
tree.next.next = new ListNode(3);
tree.next.next.next = new ListNode(4);
tree.next.next.next.next = new ListNode(5);

console.log(oddEvenList(tree));

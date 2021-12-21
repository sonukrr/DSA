//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var carry = 0;
  var additiveList;
  var currAdditive;
  while (l1 != null || l2 != null) {
    let sum = carry;
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;

    carry = Math.floor(sum / 10);
    let num = sum % 10;

    if (!currAdditive) {
      additiveList = new ListNode(num);
      currAdditive = additiveList;
    } else {
      currAdditive.next = new ListNode(num);
      currAdditive = currAdditive.next;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if(carry != 0)
    currAdditive.next = new ListNode(carry);
  return additiveList;
};

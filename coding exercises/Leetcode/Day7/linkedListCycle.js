/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// TC - O(n), SC - O(1)
var hasCycle = function (head) {
  if (head == null || head.next == null) return false;
  var fast = head;
  var slow = head;


  while (fast.next != null && fast.next.next != null) {
    fast = fast.next.next;
    slow = slow.next;   
    if (slow == fast) {
      // cycle exists
      return true;
    }
  }

  return false;
};

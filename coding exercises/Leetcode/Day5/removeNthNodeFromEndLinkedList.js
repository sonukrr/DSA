/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    var first = head;
    var second = head;
    let counter = 1;
    while (counter <= n) {
      second = second.next;
      counter++;
    }
    // head remove
    if (second == null) {
      if(head.next == null){
          return null;
      }
  
      head.val = head.next.val;
      head.next = head.next.next;
      return head;
    }
  
    while (second.next != null) {
      first = first.next;
      second = second.next;
    }
  
    first.next = first.next.next;
    return head;
  };
  
  
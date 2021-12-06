/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // no head or only head node exists
    if(head == null || head.next == null) return head;

    //for more than 1 node existing
    var prev = null;
    var curr = head;
    var next;

    while(curr != null){
        next =  curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;        
    }

    return prev;
  };
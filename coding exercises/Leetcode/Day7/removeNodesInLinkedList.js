/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(head == null) return head;
    while(head != null && head.val == val){
        head = head.next;
    }
    let prev = null;
    var curr = head;
    while(curr != null){
        if(curr.val == val){
            curr = curr.next;
            prev.next = curr;
            continue;
        }

        prev = curr;
        curr = curr.next;
    }

    return head;
};
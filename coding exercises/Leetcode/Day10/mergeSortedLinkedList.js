
//   Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// TC - O(n1+n2), SC - O(1)
var mergeTwoLists = function(list1, list2) {    
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    var l1 = list1;
    var l2 = list2;
    if(list2.val < list1.val){
        l1 = list2;
        l2 = list1;
    }

    var res = l1;
    while (l1 != null && l2 != null) {
        let tmp = new ListNode(null);
        while(l1 != null && l1.val <= l2.val){
            tmp = l1;
            l1 = l1.next;
        }
        tmp.next = l2;
        //swap
        let temp = l1;
        l1 = l2;
        l2 = temp;
    }
    

    return res;
};
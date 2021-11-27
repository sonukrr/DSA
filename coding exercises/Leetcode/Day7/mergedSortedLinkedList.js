
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  };

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// TC - O(n1+n2), SC - O(n1+n2)
var mergeTwoLists = function(list1, list2) {    
    var dummyHead = new ListNode();
    var duplicateDummyHead = dummyHead;
    var head1 = list1;
    var head2 = list2;

    while(head1 != null && head2 != null){
        if(head1.val < head2.val){
            let node = new ListNode(head1.val);
            duplicateDummyHead.next = node;   
            head1 = head1.next;         
        }else{
            duplicateDummyHead.next = new ListNode(head2.val);
            head2 = head2.next;
        }
        duplicateDummyHead = duplicateDummyHead.next;
    }

    while(head1 != null){
        duplicateDummyHead.next = new ListNode(head1.val);
        head1 = head1.next;
        duplicateDummyHead = duplicateDummyHead.next;
    }

    while(head2 != null){
        duplicateDummyHead.next = new ListNode(head2.val);
        head2 = head2.next;
        duplicateDummyHead = duplicateDummyHead.next;
    }

    return dummyHead.next;
};


// TC - O(n1+n2), SC - O(1)
var mergeTwoLists = function(list1, list2) {    
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    if(list1.val > list2.val){
        let tmp = list1;
        list1 = list2;
        list2 = tmp;
    }

    var res = list1;

    while(list1 != null && list2 != null){
        let tmp = new ListNode(null);
        while(list1 != null && list1.val <= list2.val){
            tmp = list1;
            list1 = list1.next;
        }

        tmp.next = list2;
        //swap
        let temp = list1;
        list1 = list2;
        list2 = temp;      
    }

    return res;
};

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

var l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log( mergeTwoLists(l1,l2));
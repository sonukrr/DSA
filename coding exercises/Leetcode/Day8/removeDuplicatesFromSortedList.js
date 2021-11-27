var deleteDuplicates = function(head) {
   var prev = new ListNode(null);
   var curr = head;
   while (curr !=  null) {
       if(curr.val == prev.val){
           prev.next = curr.next;
           curr.next = null;
           curr = prev.next;
       }else{
           prev = curr;
           curr = curr.next;
       }
   } 
   return head;
};
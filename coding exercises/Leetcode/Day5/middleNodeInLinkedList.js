var middleNode = function (head) {
    var nodesCount = 1;
    var curr = head;
    while (curr.next) {
      curr = curr.next;
      nodesCount++;
    }
  
    var midNodeCount = Math.floor(nodesCount / 2); 
      var curr = head;
    while(midNodeCount >= 1){
        curr = curr.next;
        midNodeCount--;
  
    }
  
    return curr;
  };
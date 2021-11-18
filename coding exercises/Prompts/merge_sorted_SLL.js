// TC - O(n+m), SC - O(1)
// Iterative
function mergeLinkedLists(headOne, headTwo) {
  var p1Prev = null;
  var p1 = headOne;
  var p2 = headTwo;
  while (p1 && p2) {
    if (p1.value < p2.value) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev) p1Prev.next = p2;
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }
  if (p1 == null) {
    p1Prev.next = p2;
  }

  return headOne.value < headTwo.value ? headOne : headTwo;
}


// TC - O(n+m), SC - O(n+m) for recursive calls in stack
// Recursive
function mergeLinkedLists(headOne, headTwo) {
  recursiveMerge(headOne, headTwo, null);
  return headOne.value < headTwo.value ? headOne : headTwo;
}

function recursiveMerge(p1, p2, p1Prev) {
  if(p1 == null){
    p1Prev.next = p2;
    return;
  }
  if(p2 == null){
    return;
  }
  if (p1.value < p2.value) {
    recursiveMerge(p1.next, p2, p1);
  } else {
    if (p1Prev) p1Prev.next = p2;
    const newP2 = p2.next;
    p2.next = p1;
    recursiveMerge(p1, newP2, p2);
  }
}

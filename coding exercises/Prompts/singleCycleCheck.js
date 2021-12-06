// TC - O(n), SC - O(1)
function hasSingleCycle(array) {
    var numElementsVisited = 0;
    var currIdx = 0;
    while (numElementsVisited < array.length) {
        // if cycle reaches the origin point before without all n elements
        if(numElementsVisited > 0 && currIdx == 0){
            return false;
        }

        numElementsVisited++;
        currIdx = getNextIdx(currIdx, array);
    }

    return currIdx == 0;
  }

  function getNextIdx(currIdx, array) {
      let jump = array[currIdx];
      let nextIdx = (currIdx + jump) % array.length;
      return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
  }
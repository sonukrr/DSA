// TC - O(n), SC - O(1)
function maxSubsetSumNoAdjacent(array) {
    if(array.length == 1) return array[0];
    if(array.length == 2) return Math.max(array[0], array[1]);
        
    var first = Math.max (array[0], array[1]);    
    var second = array[0];
    var currMax = 0;
    for (let i = 2; i < array.length; i++) {
        currMax = Math.max(first, second+array[i]);
        second = first;
        first = currMax;                
    }

    return first;
  }

  var arr = [7, 10, 12, 7, 9, 14];
  maxSubsetSumNoAdjacent(arr);
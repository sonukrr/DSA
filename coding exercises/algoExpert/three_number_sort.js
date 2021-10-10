// single pass - arranges all numbers at correct places by use of pointers
// TC - O(n), SC - O(1)
function threeNumberSortApproach3(array, order) {
  var first = 0;
  var second = 0;
  var third = array.length - 1;
  while (second <= third) {
    if (array[second] == order[0]) {
      //swap
      [array[first], array[second]] = [array[second], array[first]];
      ++first;
      ++second;
    } else if (array[second] == order[2]) {
      //swap
      [array[second], array[third]] = [array[third], array[second]];
      --third;
    } else {
      ++second;
    }
  }

  return array;
}

// in 2 pass - forward pass brings all 0th to beg and backward pass brings all 3rd to end
// TC - O(n), SC - O(1)
function threeNumberSortApproach2(array, order) {
  //forward pass
  let swapIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === order[0]) {
      //swap
      [array[i], array[swapIdx]] = [array[swapIdx], array[i]];
      ++swapIdx;
    }
  }

  //backward pass
  swapIdx = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === order[2]) {
      [array[i], array[swapIdx]] = [array[swapIdx], array[i]];
      --swapIdx;
    }
  }

  return array;
}

// Buckets count
// TC - O(n), SC - O(1)
function threeNumberSort(array, order) {
  //first pass - count 0th //TC - O(n)
  var firstCount = countOccurence(order[0]);
  //second pass - count 1st //TC - O(n)
  var secondCount = countOccurence(order[1]);

  //third pass - count 3rd
  var thirdCount = countOccurence(order[2]);

  var count = 0;
  while (count != firstCount) {
    array[count] = order[0];
    ++count;
  }
  for (let i = 0; i < secondCount; i++) {
    array[count] = order[1];
    count++;
  }

  for (let i = 0; i < thirdCount; i++) {
    array[count] = order[2];
    count++;
  }

  return array;
  function countOccurence(target) {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        ++count;
      }
    }

    return count;
  }
}

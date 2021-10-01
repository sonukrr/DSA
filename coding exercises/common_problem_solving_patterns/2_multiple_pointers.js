/**
 * creating two pointers that corresponds to index or position
 * and move them towards the beginning, end or middle when a certain condition is meet.
 */

/**
 * @description find the first pair of number that sums to 0 in a sorted array
 * TC- O(n)
 */
function sumZero(arr){
    var left = 0;
    var right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum == 0){
            return [arr[left], arr[right]];            
        }else if(sum > 0){
            right--;
        }else {
            left++;
        }
    }   

    return 'No pair found';
}

console.log(sumZero([0,0]));
console.log(sumZero([-5,1,2,3,4,5]));
// console.log(sumZero([-1,-2,-3,3,4,5])); edge case. Feel free to cover it.


/**
 * To count the unique values in an array
 * TC- O(n)
 */
function countUniqueValues(arr){
    if(arr.length == 0)
        return 0;

    var i = 0;
    for (var j = 1; j < arr.length; j++) { //j pointer is used to search the next unique value
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    
  console.log(arr);

    return i+1;
}

console.log(countUniqueValues([1,1,2,2,2,3,4,4,4]));
console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,6,7]));



// 1. CountZeroes
// [1,1,1,1,0,0,0]  -> 3,
// [0,0,0,0,1,1]    -> 4
//TC - O(log n)
function countZeroes(arr){
    var left = 0;
    var right = arr.length;
    var mid = 0;
    while(left < right){
        mid = Math.floor((left + right)/2);
        if(arr[mid] === 1){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    
    return arr.length - left;
}

console.log(countZeroes([1,0,0,0,0,0]));

//2. sortedFrequency
// [1,1,1,2,2,2,3,4], 2  -> 3
function countSortedFrequecy(arr, num){
    var left = 0;
    var right = arr.length;
    var mid = 0;
    var count = -1;

    while(left < right){
        mid = Math.floor((left + right)/2);
        if(arr[mid] < num){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }

    while(arr[left] == num){
        if(count == -1) count = 0;
        count++;
        left++;
    }

    return count;
}
// // TC-O(n), SC - O(n)
// var rotate = function (nums, k) {
//   const rotatedArr = Array(nums.length).fill(null);
//   for (let i = 0; i < nums.length; i++) {
//     let rotatedIdx = (i + k) % nums.length;
//     rotatedArr[rotatedIdx] = nums[i];
//   }
//   return rotatedArr;
// };

// TC - O(nk), SC - O(1)
var rotate = function (nums, k) {
    for(let i=1; i<=k; i++){
        nums.unshift(nums.pop());
    }  
};

// TC - O(n), SC- O(1)
var rotate = function(nums, k){
    k = k % nums.length;
    reverse(nums, 0, nums.length-1);    
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
    return nums;

}

function reverse(arr, start, end){
    while(start <= end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }    
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

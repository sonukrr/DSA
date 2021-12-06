/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// TC - O(n^2 * n!), SC - O(n*n!)
 var permute = function(nums) {    
    const perms = [];
    backTrack(nums, []);
    return perms;

    function backTrack(arr, perm){
        if(perm.length == nums.length){
            perms.push([...perm]);            
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            perm.push(arr[i]);
            let newArr = arr.slice(0,i).concat(arr.slice(i+1));
            backTrack(newArr, perm);
            perm.pop();
        }
    }
};

// TC - O(n*n!), SC - O(n*n!)
// without using any extra space we can just swap the elements take snaphot and revert the swapping
var permute = function(nums){
    const perms = [];
    permuteHelper(0, nums, perms);
    return perms;
}

function permuteHelper(i, arr, perms) {
    if(i == arr.length){
        perms.push([...arr]);
        return;
    }

    for (let j = i; j < arr.length; j++) {
        swap(arr, i, j);
        permuteHelper(i+1, arr, perms);
        swap(arr, i, j);
        
    }
}

function  swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(permute([1,2,3]));
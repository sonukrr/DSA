/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC - O(n) | SC - O(n)
 var productExceptSelf = function(nums) {
    const products = new Array(nums.length).fill(1);

    let currPrd = 1;
    for (let i = 0; i < nums.length; i++) {
        products[i] = currPrd;
        currPrd = currPrd * nums[i];        
    }
    currPrd = 1;
    for (let i = nums.length-1; i >=0; i--) {
        products[i] = products[i] * currPrd;
        currPrd = currPrd * nums[i];        
    }


    return products;
};
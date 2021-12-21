/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    const pairs = [];
    arr.sort((n1, n2)=> n1- n2);
    
    let minAbsoluteDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
        minAbsoluteDiff = Math.min(minAbsoluteDiff, arr[i] - arr[i-1]);      
    }

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] - arr[i-1] == minAbsoluteDiff){
            pairs.push([arr[i-1], arr[i]]);
        }        
    }

    return pairs;
};

console.log(minimumAbsDifference([-5, -3, 3, 5, 10, 12, 15]));


 // Bucket Sort
 // TC - O(n) | SC - 0(1)
 var sortColors = function(arr){
    const freqCount = {};
    // constant space as its not going to scale up with input
    for (const num of arr) {
        freqCount[num] = (freqCount[num] + 1) || 1;
    }

    var idx = 0;
    while(freqCount['0'] >= 1){
        arr[idx] = 0;
        freqCount['0']--;
        idx++;
    }
    while(freqCount['1'] >= 1){
        arr[idx] = 1;
        freqCount['1']--;
        idx++;
    }
    while(freqCount['2'] >= 1){
        arr[idx] = 2;
        freqCount['2']--;
        idx++;
    }

    return arr;
 }


 // Quick Sort 
 // TC - O(n) | SC - O(1)
 var sortColors = function(arr){
     var left = 0;
     var right = arr.length-1;
     var curr = 0;
     while(curr <= right){
         if(arr[curr] == 0){
            [arr[left], arr[curr]] = [arr[curr], arr[left]];
            left++;
         }
         else if(arr[curr] == 2){
            [arr[right], arr[curr]] = [arr[curr], arr[right]];
            right--;
            curr--;
         }

         curr++;
     }

 }
 var arr = [1,1,2,0,0,1,2,0];
 sortColors(arr);
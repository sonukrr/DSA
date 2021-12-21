/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    if(s.length == 1) return 1;

    var curr = 0;
    var count = 0;
    var currCount = 0;
    while(curr < s.length){
        if(s[curr] == s[curr+1]){
            currCount++;
        }else {
            currCount++;
            count = Math.max(count, currCount);
            currCount = 0;
        }

        curr++;
    }
    return count;
};

console.log(maxPower("lc"));
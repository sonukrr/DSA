// TC- O(log n), SC - O(1)
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 1;
        var end = n;
        var mid;
        var badVersion = 0;
        while(start <= end){
            mid = Math.floor((start+end)/2);
            if(isBadVersion(mid)){
                badVersion = mid;
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        return badVersion;
    };
};

var isBadVersion = (n) => {
    if(n == 3) return true;
    return false;
}
console.log(solution(isBadVersion)(5));
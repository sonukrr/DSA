/**
 * @param {number[][]} intervals
 * @return {number}
 */
// TC - O(n log  n) | SC - O(1)
 var eraseOverlapIntervals = function(intervals) {
    // sort
    intervals.sort((i1,i2)=> i1[0] - i2[0]);

    var currInt;
    var idx = 0;
    var overlappingIntervalsCount = 0;
    while (idx < intervals.length-1) {
        if(!currInt){
            currInt = [...intervals[idx]];
        }
        let nxtInt = intervals[idx+1];
        if(currInt[1] > nxtInt[0]){
            overlappingIntervalsCount++;
            currInt = [currInt[0], Math.min(currInt[1] , nxtInt[1])];            
        }else{
            currInt = [...nxtInt];
        }


        idx++;
    }

    return overlappingIntervalsCount;
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
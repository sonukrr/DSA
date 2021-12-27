/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  var intervalsMap = {};

  for (let i = 0; i < s.length; i++) {
    if (intervalsMap[s[i]] == undefined) {
      intervalsMap[s[i]] = [i, i];
    } else {
      intervalsMap[s[i]][1] = Math.max(intervalsMap[s[i]][1], i);
    }
  }

  // merge all overlapping intervals
  var lengthsArr = [];
  var allIntervals = Object.values(intervalsMap);
  var tmpInt = [...allIntervals[0]];
  for (let i = 1; i < allIntervals.length; i++) {
    let nxt = allIntervals[i];
    if (nxt[0] <= tmpInt[1]) {
      tmpInt[1] = Math.max(tmpInt[1], nxt[1]);
    } else if (nxt[0] > tmpInt[0]) {
      lengthsArr.push(tmpInt[1] - tmpInt[0] + 1);
      tmpInt = [...nxt];
    }
  }
  lengthsArr.push(tmpInt[1] - tmpInt[0] + 1);
  return lengthsArr;
};

var str = "ababcbacadefegdehijhklij";
console.log(partitionLabels(str));

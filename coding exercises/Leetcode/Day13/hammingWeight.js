var hammingWeight = function (n) {
    console.log(n.toString(2).match(/1/g));
  return n.toString(2).match(/1/g).length || 0;
};

var n = 00000000000000000000000000001011;
console.log(hammingWeight(n));

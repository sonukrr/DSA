var rob = function (nums) {
  var rob1 = 0;
  var rob2 = 0;
  for (const curr of nums) {
    let temp = Math.max(curr + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};

console.log(rob([2, 7, 9, 3, 1]));

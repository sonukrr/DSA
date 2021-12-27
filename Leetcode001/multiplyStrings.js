var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 1) return num1;
  if (num2 == 0 || num1 == 1) return num2;

  var res = Array(num1.length + num2.length).fill(0);
 
  num1 = [...num1].reverse();
  num2 = [...num2].reverse();
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      let digit = num1[i] * num2[j];
      res[i+j] += digit;      
      res[i+j+1] += Math.floor(res[i+j] / 10); // carry
      res[i+j] = res[i+j] % 10; // digit
    }
  }
  res = res.reverse();
  
  var beg = 0;
  while (beg < res.length && res[beg] == 0) {
    beg++;
  }

  return res.splice(beg).join('');
};

console.log(multiply("0", "0"));

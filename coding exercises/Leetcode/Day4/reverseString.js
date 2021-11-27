/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//  var reverseString = (s) => {
//     var left = 0;
//     var right = s.length - 1;  
//     while (left <= right) {
//      [s[left], s[right]] = [s[right], s[left]];
//       left++;
//       right--;
//     }
  
//     return s.join('');
//   };

  var reverseString = (s) => {
      var left = 0;
      var right = str.length-1;
      reverseStringHelper(s);

      function reverseStringHelper(str){
        if(left>right) return;
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
        reverseString(str);
    }
    return s;
  }



// TC - O(n), SC -O(n)
var reverseWords = function (s) {
  const words = [];
  let startOfWord = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char == " ") {
      words.push(s.slice(startOfWord, i));
      startOfWord = i;
    } else if (s[startOfWord] == " ") {
      words.push(" ");
      startOfWord = i;
    }
  }

  words.push(s.slice(startOfWord));

  for (let i = 0; i < words.length; i++) {
    if (words[i] != " ") {
      words[i] = reverse(Array.from(words[i]));
    }
  }
  return words.join("");
};

function reverse(str) {
  var left = 0;
  var right = str.length - 1;
  while (left <= right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str.join("");
}

console.log(reverseWords("Go      night"));

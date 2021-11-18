// TC - O(n) :not n^2 coz word creation takes a finite operations. So O(n + n) = O(2n)
// SC - O(n)
function reverseWordsInString(string) {
  var revStr = "";
  var j = string.length - 1;
  //O(n)
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] == " " && string[i + 1] != " ") {
      revStr += string.slice(i + 1, j + 1) + " "; // O(n)
      j = i - 1;
    } else if (string[i] == " " && string[i + 1] == " ") {
      revStr += " ";
      j = i - 1;
    } else if (i == 0) {
      revStr += string.slice(i, j + 1);
    }
  }

  return revStr;
}

// TC - O(n), SC - O(n)
function reverseWordsInString(string) {
  const strsArr = [];
  let startOfWord = 0;
  // 1. put all words into array
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      strsArr.push(string.slice(startOfWord, i));
      startOfWord = i;
    } else if (string[startOfWord] == " ") {
      strsArr.push(string.slice(startOfWord, i));
      startOfWord = i;
    }
  }

  strsArr.push(string.slice(startOfWord));

  //2. reverse : In place
  reverseList(strsArr);

  return strsArr.join('');
}

function reverseList(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

// TC - O(n), SC - O(n)
function reverseWordsInString(string) {
  const characters = [];
  // 1. reverse the string
 for (const char of string) {
   characters.push(char);
 }

 reverseListRange(characters, 0, characters.length -1);

  // 2. reverse the words to make them correct
  let startOfWord = 0;  
  while(startOfWord < characters.length){
    let endOfWord = startOfWord;
    while (endOfWord < characters.length && characters[endOfWord] != ' ') {
      endOfWord++;
    }
    reverseListRange(characters, startOfWord, endOfWord-1);
    startOfWord = endOfWord + 1;    
  }
  

  return characters.join('');
}

function reverseListRange(characters, start, end){
  while(start < end){
    [characters[start], characters[end]] = [characters[end], characters[start]];
    start++;
    end--;
  }
}
var str = "AlgoExpert is the best!";
// var str = "test   ";
// var str = "a";

console.log(reverseWordsInString(str));

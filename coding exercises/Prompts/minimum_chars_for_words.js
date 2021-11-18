// TC - O(n*l) n- words count, l - length of longest word. To be precise its O(nl + c). c <= nl
// SC - O(c) - number of unique characters across all words
function minimumCharactersForWords(words) {
    const uniqueChars = {};
    for (const word of words) {
      let currChars = {};
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        currChars[char] = (currChars[char] || 0) + 1;
      }
  
      for (const key in currChars) {
          uniqueChars[key] = Math.max(uniqueChars[key] || 0, currChars[key]);
      }
  
    }
    const res = [];
    for (const key in uniqueChars) {
      while(uniqueChars[key]){
          res.push(key);
          uniqueChars[key] -= 1;
      } 
    }
    return res;
  }
  // Do not edit the line below.
  exports.minimumCharactersForWords = minimumCharactersForWords;
  
var arr = ["this", "that", "did", "deed", "them!", "a"];

console.log(minimumCharactersForWords(arr));

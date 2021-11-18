// TC - O(w * n * log n), SC - O(wn), w - total number of words, n - length of longest word
function groupAnagrams(words) {
  const anagrams = {};
  // O(w) - number of words
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");  //O(n log n) n- length of longest word
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

var arr = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(arr));

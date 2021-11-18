// TC - O(n), SC - O(n)
function generateDocument(characters, document) {
  const charCount = {};
  const docCharCount = {};
  for (const char of characters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of document) {
    docCharCount[char] = (docCharCount[char] || 0) + 1;
  }

  for (const key in docCharCount) {
    if (docCharCount[key] > charCount[key]) return false;
    if (!charCount[key]) {
      return false;
    }
  }

  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert iiis the Best!")
);
console.log(generateDocument("A", "a"));

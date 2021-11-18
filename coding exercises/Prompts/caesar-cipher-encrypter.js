function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  key = key % 26;
  for (let i = 0; i < string.length; i++) {
    newLetters[i] = getNewLetter(string[i], alphabets, key);
  }

  return newLetters.join("");

  function getNewLetter(char, alphabets, key) {
    const newLetterCode = alphabets.indexOf(char) + key;
    return alphabets[newLetterCode % 26];
  }
}

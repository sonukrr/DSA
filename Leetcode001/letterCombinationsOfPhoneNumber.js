/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  if(digits == '') return [];
  
  const allLetters = [];
  var currentLetter = Array(digits.length).fill("0");
  generateLetterCombinations(0, digits ,currentLetter ,allLetters);
  return allLetters;
};

function generateLetterCombinations(digitIdx, digits, currentLetter, allLetters){    
    
    if(digitIdx == digits.length){
        allLetters.push(currentLetter.join(''));        
        return;
    }

    let currDigit = digits[digitIdx];
    let availableLetters = DIGIT_LETTERS[currDigit];
    for (let i = 0; i < availableLetters.length; i++) {
        currentLetter[digitIdx] = availableLetters[i];        
        generateLetterCombinations(digitIdx+1, digits, currentLetter, allLetters);

    }
    return;
}



const DIGIT_LETTERS = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}


console.log(letterCombinations(""));

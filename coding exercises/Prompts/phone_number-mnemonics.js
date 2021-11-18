// TC - O(4^n * n), SC - O(4^n * n)
function phoneNumberMnemonics(phoneNumber) {
  const mnemonicsFound = [];
  const currentMnemonic = Array(phoneNumber.length).fill("0");

  phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);

  return mnemonicsFound;

  function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound){
    if(idx == phoneNumber.length) {
        currentMnemonic = currentMnemonic.join(''); // O(n)
        mnemonicsFound.push(currentMnemonic);
    }else{
        const digit = phoneNumber[idx];
        const letters = DIGIT_LETTERS[digit];
        for (const letter of letters) {
            currentMnemonic[idx] =  letter;
            phoneNumberMnemonicsHelper(idx+1, phoneNumber, currentMnemonic, mnemonicsFound); // O(4^n)
        }
    }
  }

}


const DIGIT_LETTERS = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9":"wxyz"
};

var phoneNumber = "8860757998";
console.log(phoneNumberMnemonics(phoneNumber));

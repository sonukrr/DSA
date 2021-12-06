var isValid = function(s) {
    var stack = [];
    var lookUpTable = {
         ")": "(",
         "]": "[",
         "}": "{"
    };

    for (let i = 0; i < s.length; i++) {
      let char = s[i];
        if(lookUpTable[char] == undefined){
            stack.push(char);
        }else{
            if(lookUpTable[char] != stack.pop()){
                return false;
            }
        }
        
    }

    return stack.length == 0? true: false;
};
console.log(isValid("()"));


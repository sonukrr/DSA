// TC - O(n), SC - O(n)
function balancedBrackets(string) {
  const lookUpObj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  var stack = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!lookUpObj[char]) {
      if (char == "{" || char == "[" || char == "(") {
        stack.push(char);
      } else continue;
    } else {
      if (lookUpObj[char] == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length == 0 ? true : false;
}

var str = "(a)";
console.log(balancedBrackets(str));

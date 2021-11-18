// TC - O(n), SC - O(n)
function runLengthEncoding(string) {
  var encodedStr = "";
  var tmpCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (i + 1 <= string.length - 1 && string[i] == string[i + 1]) {
      tmpCount++;
    } else {
      tmpCount++;
      if (tmpCount > 9) {
        var quot = Math.floor(tmpCount / 9);
        var rem = tmpCount % 9;
        var tmpQuot = "";
        for (let count = 1; count <= quot; count++) {
          encodedStr += `${1 * 9}${string[i]}`;
        }
        encodedStr += `${rem}${string[i]}`;
        tmpCount = 0;
      } else if (tmpCount > 0) {
        encodedStr += `${tmpCount}${string[i]}`;
        tmpCount = 0;
      } else {
        tmpCount++;
        encodedStr += `${tmpCount}${string[i]}`;
        tmpCount = 0;
      }
    }
  }

  return encodedStr;
}

// TC - O(n), SC - O(n)
function runLengthEncodingApproach2(string) {
  const encodedStr = [];
  var currentLength = 1;
  for (let i = 1; i < string.length; i++) {
    let curr = string[i];
    let prev = string[i - 1];
    if (curr != prev || currentLength == 9) {
      encodedStr.push(currentLength.toString());
      encodedStr.push(prev);
      currentLength = 0;
    }

    currentLength++;
  }

  //last char case
  encodedStr.push(currentLength.toString());
  encodedStr.push(string[string.length - 1]);
  currentLength = 0;

  return encodedStr.join("");
}

var str = "AAAAAAAAAAAAABBCCCCDE";
console.log(runLengthEncodingApproach2(str));

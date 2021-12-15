// TC - O(m+n^2) | SC - O(m + n) , m - pattern length, n - string length
function patternMatcher(pattern, string) {
    if (pattern.length > string.length) return [];
  
    const [newPattern, isYReplacedWithX] = generatePattern(pattern);
  
    const [xCount, yCount, firstYIdx] = countXAndYAndPosOfY(newPattern);
  
    // main algo starts here
  
    var lengthOfXStr = 0;
    var lengthOfYStr = 0;
    var mainStringLength = string.length;
    // loop over main string
    for (let i = 0; i < string.length; i++) {
      lengthOfXStr++;
      lengthOfYStr = (mainStringLength - xCount * lengthOfXStr) / yCount;
      if (lengthOfYStr < 0) {
        break;
      }
  
      let xSubStr = string.slice(0, lengthOfXStr);
  
      let yIdx = firstYIdx * lengthOfXStr;
      let ySubStr = string.slice(yIdx, yIdx + lengthOfYStr);
  
      var isPatternMatching = checkIfPatternMatching(
        xSubStr,
        ySubStr,
        string,
        newPattern
      );
  
      if (isPatternMatching) {
        if (isYReplacedWithX) {
          return [ySubStr, xSubStr];
        } else {
          return [xSubStr, ySubStr];
        }
      }
    }
  
    return [];
  }
  
  /**
   * @description generates a pattern array by making sure it always starts wit an x.
   * @param {string} pattern
   * @returns {string[]} pattern array
   */
  function generatePattern(pattern) {
    var patternArr = [];
    var isYReplacedWithX = false;
    for (const char of pattern) {
      patternArr.push(char);
    }
  
    if (patternArr[0] == "y") {
      isYReplacedWithX = true;
      for (let i = 0; i < patternArr.length; i++) {
        if (patternArr[i] == "y") {
          patternArr[i] = "x";
        } else {
          patternArr[i] = "y";
        }
      }
    }
  
    return [patternArr, isYReplacedWithX];
  }
  
  /**
   * @description Counts x, counts y and first position of y
   * @param {string} pattern
   * @returns xCount, yCount, firstPositionOfY
   */
  function countXAndYAndPosOfY(pattern) {
    var xCount = 0;
    var yCount = 0;
    var firstYIdx = -1;
  
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (char == "x") xCount++;
      if (char == "y") {
        if (firstYIdx == -1) firstYIdx = i;
        yCount++;
      }
    }
  
    return [xCount, yCount, firstYIdx];
  }
  
  /**
   * @description replaces occurences of x, y in pattern arr with current xSubStr, ySubStr and then checks if it mathces with main string
   * @param {string} xStr 
   * @param {string} yStr 
   * @param {string} mainStr 
   * @param {string[]} newPattern 
   * @returns 
   */
  function checkIfPatternMatching(xStr, yStr, mainStr, newPattern) {
    let newPatternCopy = [...newPattern];
  
    for (let i = 0; i < newPatternCopy.length; i++) {
      let char = newPatternCopy[i];
      if (char == "x") {
        newPatternCopy[i] = xStr;
      } else {
        newPatternCopy[i] = yStr;
      }
    }
  
    return newPatternCopy.join("") === mainStr;
  }
  
  
  var obj = {
      "pattern": "xxyxxy",
      "string": "gogopowerrangergogopowerranger"
    };
  
    patternMatcher(obj.pattern, obj.string);
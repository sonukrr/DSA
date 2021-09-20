// TC-O(M+N)
function constructNote(message, str) {
  const lookUpObj1 = {};
  const lookUpObj2 = {};

  for (const char of message) {
    lookUpObj1[char] = (lookUpObj1[char] || 0) + 1;
  }

  for (const char of str) {
    lookUpObj2[char] = (lookUpObj2[char] || 0) + 1;
  }

  for (const char in lookUpObj1) {
    if (!lookUpObj2[char]) return false;
    if (lookUpObj1[char] > lookUpObj2[char]) return false;
  }

  return true;
}

//TC-O(n)
function findAllDuplicates(arr) {
  const lookUpObj1 = {};
  const res = [];
  for (const item of arr) {
    lookUpObj1[item] = (lookUpObj1[item] || 0) + 1;
  }

  for (const key in lookUpObj1) {
    if (lookUpObj1[key] == 2) {
      res.push(+key);
    }
  }

  return res;
}


// TC - O(ns+bs), SC - O(ns + n)
function multiStringSearch(bigString, smallStrings) {
  const smallStrExists = new Array(smallStrings.length).fill(false);
  const smallStringsTrie = {};
  buildSmallStringsTrieFrom(smallStrings, smallStringsTrie);

  loopThroughBigStrAndFind(bigString, smallStringsTrie, smallStrExists);
  return smallStrExists;
}

// TC - O(ns) | SC - O(ns), n - length of small Strs array, s - length of longest small str
function buildSmallStringsTrieFrom(smallStrArr, res) {
  for (let j = 0; j < smallStrArr.length; j++) {
    var node = res;
    const str = smallStrArr[j];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (!(char in node)) node[char] = {};
      node = node[char];
    }

    node["*"] = j;
  }

  return;
}

// TC - O(bs) | SC - O(n), b - length of bigger str, n - smallStrs array length
function loopThroughBigStrAndFind(bigStr, smallStrTrie, resArr) {
  var node = smallStrTrie;
  for (let i = 0; i < bigStr.length; i++) {
    checkIfStrExistsAndUpdateFlag(i, bigStr, node, resArr);
  }
}

function checkIfStrExistsAndUpdateFlag(startIdx, bigStr, node, resArr) {
  while (bigStr[startIdx] in node) {
    let char = bigStr[startIdx];
    node = node[char];
    startIdx++;
    if ("*" in node) {
      resArr[node["*"]] = true;
    }
  }
}

var obj = {
  bigString: "this is a big string",
  smallStrings: ["this", "yo", "is", "a", "bigger", "string", "kappa"],
};

multiStringSearch(obj.bigString, obj.smallStrings);

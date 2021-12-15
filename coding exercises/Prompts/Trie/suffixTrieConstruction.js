class SuffixTrie {
  constructor(str) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(str);
  }

  populateSuffixTrieFrom(str) {
    for (let i = 0; i < str.length; i++) {
      this.populateBranch(i, str);
    }
    return this.root;
  }

  // TC - O(n^2), SC - O(n^2)
  populateBranch(start, str) {
    let node = this.root;
    for (let j = start; j < str.length; j++) {
      const char = str[j];
      if (!(char in node)) {
        node[char] = {};
      }
      node = node[char];
    }

    node[this.endSymbol] = true;
  }
  // TC - O(m), SC - O(1)
  contains(str) {
    var node = this.root;
    for (const char of str) {
      if (!(char in node)) return false;
      node = node[char];
    }

    return this.endSymbol in node;
  }
}

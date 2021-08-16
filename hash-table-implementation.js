class HashTable {
  constructor(size = 50) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    var WEIRD_PTIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PTIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    var hashIdx = this._hash(key);
    if (!this.keyMap[hashIdx]) {
      this.keyMap[hashIdx] = [];
    }
    if (!this.get(key)) this.keyMap[hashIdx].push([key, value]);
    else return "Duplicate keys not allowed";
    return hashIdx;
  }

  get(key) {
    var hashIdxRef = this.keyMap[this._hash(key)];
    if (!hashIdxRef) return undefined;

    for (let i = 0; i < hashIdxRef.length; i++) {
      var currKey = hashIdxRef[i][0];
      if (currKey == key) return hashIdxRef[i][1];
    }
  }

  keys() {
    var resArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i])
        for (let j = 0; j < this.keyMap[i].length; j++) {
          resArr.push(this.keyMap[i][j][0]);
        }
    }

    return resArr;
  }

  values() {
    var resArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i])
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!resArr.includes(this.keyMap[i][j][1]))   //handling duplicate values by removing them as order is not guaranteed
            resArr.push(this.keyMap[i][j][1]);
        }
    }

    return resArr;
  }
}

var ht = new HashTable(20);
ht.set("pink", "#ER45T6");
ht.set("red", "#FF67UI");
ht.set("ehite", "#FFF");
ht.set("asas", "hi");
ht.set("asasasas", "bye bye!!");
ht.set("wer", "bye bye!!");
ht.set("opop", "bye bye!!");


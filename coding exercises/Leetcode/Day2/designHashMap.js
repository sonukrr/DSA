var MyHashMap = function (size = 50) {
  this.arr = new Array(size);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  let pos = this.hash(key);
  if (this.arr[pos] != undefined) {
    this.arr[pos].push([key, value]);
  } else {
    this.arr[pos] = [[key, value]];
  } 
  return this;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let pos = this.hash(key);
  let value = -1;
  if (this.arr[pos] != undefined) {
    this.arr[pos].forEach((arr) => {
      if (arr[0] == key) {
        value = arr[1];
      }
    });
  }
  return value;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let pos = this.hash(key);
  if (this.arr[pos] != undefined) {
    for (let i = 0; i < this.arr[pos].length; i++) {
      let curr = this.arr[pos][i];
      if (curr[0] == key) {
        this.arr[pos][i] = [undefined, undefined];
      }
    }
  }
  return null;
};

MyHashMap.prototype.hash = function (key) {
  const WEIRD_PRIME = 31;
  const arraySize = 50;

  var pos = 1;
  let stringifiedKey = key.toString();
  for (let i = 0; i < Math.min(stringifiedKey.length, 100); i++) {
    let value = stringifiedKey[i].charCodeAt(0);
    pos = (pos * WEIRD_PRIME + value) % 50;
  }

  return pos;
};

var myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]

console.log(myHashMap);

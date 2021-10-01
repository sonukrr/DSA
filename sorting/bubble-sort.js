/**
 * @description on each iteration the largest number is available at the end.
 *              In each iteration keep on comparing the two values  at a time and swap to make greater number appear right at the end.
 * TC- O(n^2), SC-O(1)
 */
function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    var comparator = (n1, n2) => n1 - n2;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (j + 1 < arr.length && comparator(arr[j], arr[j + 1]) > 0) {
        swap(j, j + 1);
      }
    }
  }

  return arr;

  function swap(idx1, idx2) {
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
}

console.log(bubbleSort([1, 23, -9, 4, 7, 12, 100, -98, 0, 120]));

var moarKittyData = [
  {
    name: "Caty",
    age: 15,
  },
  {
    name: "Paty",
    age: 9,
  },  {
    name: "Kitey",
    age: 10,
  },  {
    name: "Parry",
    age: 2,
  },
];

var ageComparator = (obj1,obj2) => obj1.age - obj2.age;
console.log(bubbleSort(moarKittyData,ageComparator));

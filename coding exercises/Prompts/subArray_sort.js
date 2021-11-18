
// TC - O(n),, SC - O(1)
function subArraySort(array) {
  var min = -1;
  var max = -1;

  // iterate the array and find the min and max index of numbers that are not in correct place
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    if (i - 1 >= 0 && array[i - 1] > curr) {
      min = array[min] < array[i] ? min : i;
    }

    if (i + 1 <= array.length - 1 && array[i + 1] < curr) {
      max = array[max] > array[i] ? max : i;
    }
  }

  // find the correc tplace place of min and max
  if (min != -1 && max != -1) {
    var curr = 0;
    while (true) {
      if (array[curr] > array[min]) {
        min = curr;
        break;
      }
      curr++;
    }
    curr = array.length - 1;
    while (true) {
      if (array[curr] < array[max]) {
        max = curr;
        break;
      }
      curr--;
    }
  }

  return [min, max];
}


var arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
console.log(subArraySort(arr));
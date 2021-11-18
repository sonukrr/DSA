// TC - O(n^2), SC - O(n)
function nextGreaterElement1(array) {
  const nextGreaterElArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let nextGreaterEl = null;
    let right = i + 1;
    while (right < array.length) {
      if (array[right] > element) {
        nextGreaterEl = array[right];
        break;
      }
      right++;
    }

    if (nextGreaterEl == null) {
      let left = 0;
      while (left != i) {
        if (array[left] > element) {
          nextGreaterEl = array[left];
          break;
        }
        left++;
      }
    }

    nextGreaterElArr.push(nextGreaterEl !== null ? nextGreaterEl : -1);
  }

  return nextGreaterElArr;
}

// TC - O(n), SC - O(n)
function nextGreaterElement2(array) {
  const result = Array(array.length).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * array.length; i++) {
    let circularIdx = i % array.length;

    while (
      stack.length != 0 &&
      array[stack[stack.length - 1]] < array[circularIdx]
    ) {
      let top = stack.pop();
      result[top] = array[circularIdx];
    }
    stack.push(circularIdx);
  }
  return result;
}

// TC - O(n), SC - O(n)
function nextGreaterElement3(array) {
  const result = Array(array.length).fill(-1);
  const stack = [];

  for (let i = 2 * array.length - 1; i >= 0; i--) {
    let circularIdx = i % array.length;

    while (stack.length > 0) {
      if (stack[stack.length - 1] <= array[circularIdx]) stack.pop();
      else {
        result[circularIdx] = stack[stack.length - 1];
        break;
      }
    }
    stack.push(array[circularIdx]);
  }
  return result;
}

var arr = [2, 5, -3, -4, 6, 7, 2];

console.log(nextGreaterElement(arr));

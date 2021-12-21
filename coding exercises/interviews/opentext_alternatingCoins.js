// TC - O(n) | SC - O(n), n - input array length
function solution(arr) {
  let expectedAlternating = Array(arr.length).fill(1);
  toggleAlternates(true);
  let toggleCountWithEven = countTogglesNeeded();

  expectedAlternating = Array(arr.length).fill(1);
  toggleAlternates(false);
  let toggleCountWithOdd = countTogglesNeeded();

  return Math.min(toggleCountWithEven, toggleCountWithOdd);

  function toggleAlternates(isEven) {
    for (let i = 0; i < expectedAlternating.length; i++) {
      if (i % 2 == 0 && isEven) {
        expectedAlternating[i] = 0;
      } else if (i % 2 != 0 && !isEven) {
        expectedAlternating[i] = 0;
      }
    }
  }

  function countTogglesNeeded() {
    let toggleNeeded = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != expectedAlternating[i]) {
        toggleNeeded++;
      }
    }
    return toggleNeeded;
  }
}

// TC - O(n), SC - O(1)
function solution(sequence) {
  var changesWithLeading0 = 0;
  var changesWithLeading1 = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] == 1 - (i % 2)) {
      changesWithLeading0++;
    }
    if (sequence[i] == i % 2) {
      changesWithLeading1++;
    }
  }
  return Math.min(changesWithLeading0, changesWithLeading1);
}

console.log(solution([0, 1, 1, 0]));

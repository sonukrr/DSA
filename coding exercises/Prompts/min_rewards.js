// TC - O(n^2), SC - O(n)
function minRewards(array) {
  const rewards = Array(array.length).fill(1);
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    if (array[i] > array[j]) {
      rewards[i] = rewards[j] + 1;
    } else {
      // [14, 8, 2]
      while (j >= 0 && array[j] > array[j + 1]) {
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j--;
      }
    }
  }

  return rewards.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
}
// TC - O(n), SC - O(n)
function minRewardsApproach2(array) {
  const rewards = Array(array.length).fill(1);

  var minIdxs = getMinimumPeaks(array);

  // taverse the left and right of valley's
  for (let i = 0; i < minIdxs.length; i++) {
    var leftIdx = minIdxs[i];
    while (leftIdx >= 0 && array[leftIdx - 1] > array[leftIdx]) {
      rewards[leftIdx - 1] = Math.max(
        rewards[leftIdx - 1],
        rewards[leftIdx] + 1
      );
      leftIdx--;
    }

    var rightIdx = minIdxs[i];
    while (
      rightIdx <= array.length - 1 &&
      array[rightIdx + 1] > array[rightIdx]
    ) {
      rewards[rightIdx + 1] = rewards[rightIdx] + 1;
      rightIdx++;
    }
  }

  return rewards.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  function getMinimumPeaks(arr) {
    if (arr.length == 1) return [0];

    const minIndices = [];
    for (let i = 0; i < arr.length; i++) {
      if (i == 0 && arr[i] < arr[i + 1]) {
        minIndices.push(i);
      }

      if (i == arr.length - 1 && arr[i] < arr[i - 1]) {
        minIndices.push(i);
      }

      if (i == 0 || i == arr.length - 1) continue;

      if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
        minIndices.push(i);
      }
    }
    return minIndices;
  }
}

// TC - O(n), SC - O(n)
function minRewardsApproach3(scores) {
  const rewards = Array(scores.length).fill(1);

  //traverse L to R
  for (let i = 0; i < scores.length; i++) {
    if (scores[i + 1] > scores[i]) {
      rewards[i + 1] = rewards[i] + 1;
    }
  }

  // traverse R to L
  for (let i = scores.length; i >= 0; i--) {
    if (scores[i - 1] > scores[i]) {
      rewards[i - 1] = Math.max(rewards[i - 1], rewards[i] + 1);
    }
  }

  return rewards.reduce((acc,curr)=> {
    acc += curr;
    return acc;
  },0);
}

var arr = [8, 4, 2, 1, 3, 6, 7, 9, 5];
console.log(minRewardsApproach3(arr));

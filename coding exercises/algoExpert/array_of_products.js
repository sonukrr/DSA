// 1. TC - O(n^2)
// TC - O(n^2)
function arrayOfProducts(array) {
  var i = 0;
  var res = [];
  while (i != array.length) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        product *= array[j];
      }
    }

    res.push(product);
    i++;
  }

  return res;
}

// TC - O(n), SC - O(n)
function arrayOfProductsOptimized(array) {
  var res = Array(array.length).fill(1);
  var product = 1;
  //preparing left arr
  for (let i = 0; i < array.length; i++) {
    res[i] = product;
    product *= array[i];
  }

  product = 1;
  // preparing right arr and at same time multiplying with left arr to get final result
  for (let j = array.length - 1; j >= 0; j--) {
    res[j] *= product;
    product *= array[j];
  }

  return res;
}
var arr = [2, 3, 2, 3, 1, 12];
console.log(arrayOfProductsOptimized(arr));

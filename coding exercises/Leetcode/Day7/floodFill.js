var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] == newColor) return image;
  let rows = image.length;
  let cols = image[0].length;
  let valToLook = image[sr][sc];
  floodFillHelper(sr, sc);
  return image;

  function floodFillHelper(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return;
    else if (image[row][col] == newColor) return;

    if (image[row][col] == valToLook) {
      image[row][col] = newColor;
      floodFillHelper(row, col - 1); //LEFT
      floodFillHelper(row - 1, col); //TOP
      floodFillHelper(row, col + 1); //RIGHT
      floodFillHelper(row + 1, col); //BOTTOM
    }
  }
};

var image = [
  [0, 0, 0],
  [0, 0, 0],
];
var sr = 0,
  sc = 0,
  newColor = 2;
console.log(floodFill(image, sr, sc, newColor));

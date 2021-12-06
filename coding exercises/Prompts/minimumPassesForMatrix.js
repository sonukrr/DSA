class Pass{
    constructor(passCount, r, c){
        this.passCount = passCount;
        this.r = r;
        this.c = c;
    }
}
// TC - O(wh), SC - O(wh)
// similar to rotten orange problem
function minimumPassesOfMatrix(matrix) {    

    var queue = [];

    // pushing multiple source points to begin with
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if(matrix[i][j] > 0){
              queue.push(new Pass(0, i, j));
          }
      }      
  }

  // all four directions left, top, right, bottom
  var directions = [[0,-1], [-1,0], [0,1], [1,0]];

  // min passes need to make all oranges rotten
  var minPassCount = 0;
  while (queue.length != 0) {
      let size = queue.length;

      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          minPassCount = curr.passCount;
          for (const dir of directions) {
              let r = curr.r + dir[0];
              let c = curr.c + dir[1];
              if( r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length || matrix[r][c] >= 0)
                continue;
            
             // means the current cell at r,c is -ve/fresh orange so we'll make it rotten
             matrix[r][c] = matrix[r][c] * -1;
             queue.push(new Pass(curr.passCount+1, r, c));
          }
          
      }
  }

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if(matrix[i][j] < 0){
              minPassCount = -1;
              break;
          }
          
      }
      
  }
  return minPassCount;
}

var matrix = [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1],
];

console.log(minimumPassesOfMatrix(matrix));

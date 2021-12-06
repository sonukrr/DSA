// TC - O(m*n)
var updateMatrix = function (mat) {
  var queue = [];
  for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
          if(mat[i][j] === 0){
              queue.push([i,j]);
          }else
            mat[i][j] = -1;          
      }      
  }

  // right, top, bottom, left
  let dirs = [[0,1], [-1,0], [1, 0], [0,-1]];

  let level = 0;
  while(queue.length != 0){
      let size = queue.length;
      level++;
      while (size != 0) {
        let cell = queue.shift();
        for (const dir of dirs) {
            let r = cell[0]+dir[0];
            let c = cell[1] + dir[1];

            if(r<0 || c<0 || r==mat.length || c==mat[0].length || mat[r][c] != -1){
                continue;
            }
            mat[r][c] = level;
            queue.push([r,c]);

        }
        
        
        size--;
      }
  }

  return mat;
};



var mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(updateMatrix(mat));

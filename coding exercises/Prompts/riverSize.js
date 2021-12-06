// TC - O(wh), SC - O(wh) w, h - width & height of input matrix
function riverSizes(matrix) {
    const res = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            // if curr cell is river
            if(matrix[i][j] === 1){
                //go in all four directions
                let riverSize = riverSizesHelper(matrix, i, j, 0);
                if(riverSize > 0)
                    res.push(riverSize);
            }
            
        }
        
    }

    
    return res;
}

function riverSizesHelper(matrix, r, c, riverSize) {
    if(r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length || matrix[r][c] == 0 || matrix[r][c] == 2){
        return riverSize;
    }

    riverSize++;
    // marking as visited so a cell can only be part of one river at a time
    matrix[r][c] = 2;

    riverSize = riverSizesHelper(matrix, r, c-1, riverSize);
    riverSize = riverSizesHelper(matrix, r-1, c, riverSize);
    riverSize = riverSizesHelper(matrix, r, c+1, riverSize);
    riverSize = riverSizesHelper(matrix, r+1, c, riverSize);

    return riverSize;

}

var matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

console.log(riverSizes(matrix));

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// TC - O(n) | SC - O(1), n - total number of elements in matrix
 var rotate = function(matrix) {
     let size = matrix.length;
     // take transpose of the matrix
     for (let i = 0; i < size; i++) {
         for (let j = i; j < size; j++) {
             let temp = matrix[i][j];
             matrix[i][j] = matrix[j][i];
             matrix[j][i] = temp;             
         }         
     }

     // keep swapping the first and last until middle is reached for each column
     for (let i = 0; i < size; i++) {
         for (let j = 0; j < (size/2); j++) {
             let temp = matrix[i][j];
             matrix[i][j] = matrix[i][size-1-j];
             matrix[i][size-1-j] = temp;             
         }         
     }

     return matrix;
    
};
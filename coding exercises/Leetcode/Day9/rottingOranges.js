class OrangeInfo{
    constructor(timeToRot, r, c){
        this.timeToRot = timeToRot;
        this.r = r;
        this.c = c;
    }
}

// TC - O(m*n)
var orangesRotting = function(grid) {
    var queue = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 2){
                queue.push(new OrangeInfo(0, i, j));
            }            
        }        
    }

    let timeToRotAll = 0;
    var directions = [[0,-1], [1,0], [0,1], [-1,0]];
    while(queue.length != 0){
        let size = queue.length;

        while(size != 0){
            let currRotten = queue.shift();
            timeToRotAll = currRotten.timeToRot;
            for (const dir of directions) {
                let row = currRotten.r + dir[0];
                let col = currRotten.c + dir[1];
                
                // out of bounds or already rotten or empty space
                if(row < 0 || col < 0 || row == grid.length || col == grid[0].length || grid[row][col] == 2 || grid[row][col] == 0)
                    continue;
                
                // fresh orange
                grid[row][col] = 2;
                queue.push(new OrangeInfo(currRotten.timeToRot+1, row, col));                
            }
            size--;
        }
    }

    //check if any fresh orange left
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1){
                timeToRotAll = -1;
            } 
        }
    }

    return timeToRotAll;
};



var arr = [
    [2,1,1],
    [1,1,0],
    [0,1,1]    
]

console.log(orangesRotting(arr));

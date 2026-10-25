// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

 

// Example 1:



// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation: 
// Islands in gray are closed because they are completely surrounded by water (group of 1s).
// Example 2:



// Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// Output: 1
// Example 3:

// Input: grid = [[1,1,1,1,1,1,1],
//                [1,0,0,0,0,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,1,0,1,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,0,0,0,0,1],
//                [1,1,1,1,1,1,1]]
// Output: 2
const grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]];
var closedIsland = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let closedIslands = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
      return false;
    }
    if (grid[r][c] === 1 || grid[r][c] === 2) {
      return true;
    }
    grid[r][c] = 2;
    const down = dfs(r + 1, c);
    const up = dfs(r - 1, c);
    const right = dfs(r, c + 1);
    const left = dfs(r, c - 1);
    return down && up && right && left;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        if (dfs(r, c)) {
          closedIslands++;
        }
      }
    }
  }
  return closedIslands;
};
console.log(closedIsland(grid));
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 function findOrder(numCourses, prerequisites) {
    const seen = new Set();
    const seeing = new Set();
    const res = [];
    
    const adj = [...Array(numCourses)].map(r => []);
    for (let [u, v] of prerequisites) {
      adj[v].push(u);
    }
    
    for (let c = 0; c < numCourses; c++) {
      if (!dfs(c)) {
        return [];
      }
    }
    return res.reverse();
    
    function dfs(v) {
      if (seen.has(v)) {
        return true;
      }
      if (seeing.has(v)) {
        return false;
      }
      
      seeing.add(v);
      for (let nv of adj[v]) {
        if (!dfs(nv)) {
          return false;
        }
      }
      seeing.delete(v);
      seen.add(v);
      res.push(v);
      return true;
    }
  }

console.log(
  findOrder(2, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2]
  ])
);

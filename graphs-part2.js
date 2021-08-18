/**
 * undirected, unweighted graph
 * implementation usng an adjacency list
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList.hasOwnProperty(vertex))
      this.adjacencyList[vertex] = [];
    else return "Vertex already exists";
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el != v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstTraversalRecursive(vertex) {
    const resArr = [];
    const isVisisted = {};
    const adjacencyList = this.adjacencyList;

    function DFS(vertex) {
      if (!vertex) return;
      resArr.push(vertex);
      isVisisted[vertex] = true;
      adjacencyList[vertex].forEach((edge) => {
        if (!isVisisted[edge]) DFS(edge);
      });
    }
    DFS(vertex);

    return resArr;
  }

  depthFirstTraversalIterative(vertex) {
    const resArr = [];
    const visited = {};

    const stack = [];
    stack.push(vertex);
    visited[vertex] = true;
    while (stack.length) {
      var vtx = stack.pop();
      resArr.push(vtx);
      this.adjacencyList[vtx].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return resArr;
  }

  breadthFirstTraversalIterative(vertex) {
    const resArr = [];
    const visited = {};

    const queue = [];
    queue.push(vertex);
    visited[vertex] = true;
    while (queue.length) {
      var vtx = queue.shift();
      resArr.push(vtx);
      this.adjacencyList[vtx].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return resArr;
  }
}
// creation of a graph
// var g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("Aspen");
// g.addVertex("London");
// g.addVertex("New Delhi");
// g.addVertex("New York");

// g.addEdge("Tokyo", "Dallas");
// g.addEdge("Aspen", "Dallas");
// g.addEdge("Aspen", "Tokyo");
// g.addEdge("New Delhi", "New York");
// g.addEdge("London", "New Delhi");
// g.addEdge("New York", "London");

// // g.removeEdge("Aspen","Dallas");
// g.removeVertex("Aspen");
// g.removeVertex("Dallas");

// console.log(g);

//DFS(Depth first traversal)
var g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//   A
// /    \
// B     C
// |     |
// D --- E
// \     /
//    F

console.log(g);

console.log(g.depthFirstTraversalRecursive("A"));
console.log(g.depthFirstTraversalIterative("A"));
console.log(g.breadthFirstTraversalIterative("A"));


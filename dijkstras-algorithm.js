/** INCOMPLETE-------------
 * Dijkstrs Algorithm - Finding the shortest path algorithm
 * Many uses - GPS (Shortest path),  Network Routing(routing of data packets), Airline services, Biology (building the model of spread of virus
 *             among humans), AI
 */

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  //o(n log n)
  sort() {
    this.values.sort((obj1, obj2) => obj1.priority - obj2.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    //build up the initial state
    for (const vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }
    console.log(distances);
    console.log(nodes);
    console.log(previous);

    //as long as there something to visit
    while (nodes.values.length) {
      let smallest = nodes.dequeue().value;
      if (smallest == finish) {
          //WE ARE DONE
          //BUILD UP PATH TO RETURN AT END
      } 
      if(smallest || distances[smallest] !== Infinity){
          for (const neighbor in this.adjacencyList[smallest]) {
                let nextNode = this.adjacencyList[smallest][neighbor];
          }
      }
    }
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));

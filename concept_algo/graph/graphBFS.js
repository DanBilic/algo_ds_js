const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traverseBFS = (graph) => {
  const queue = [0];
  const values = [];
  const seen = {};
  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }

  return values;
};

console.log("---- Graph BFS -----");
console.log("Graph adjacency list: ", adjacencyList);
console.log("Graph BFS: ", traverseBFS(adjacencyList));

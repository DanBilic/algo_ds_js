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

const traverseDFS = (graph, seen, values, vertex) => {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];

  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    if (!seen[connection]) {
      traverseDFS(graph, seen, values, connection);
    }
  }

  return values;
};

console.log("---- Graph DFS -----");
console.log("Graph adjacency list: ", adjacencyList);
console.log("Graph DFS: ", traverseDFS(adjacencyList, {}, [], 0));

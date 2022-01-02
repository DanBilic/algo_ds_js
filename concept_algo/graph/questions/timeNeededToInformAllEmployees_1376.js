const managers = [2, 2, 4, 6, -1, 4, 4, 5];
const informTime = [0, 0, 4, 0, 7, 3, 6, 0];
headID = 4;
employerCount = 8;

const numOfMinutes = (employerCount, headID, managers, informTime) => {
  const adjacencyList = managers.map(() => []);

  for (let i = 0; i < employerCount; i++) {
    const manager = managers[i];
    if (manager === -1) continue;
    adjacencyList[manager].push(i);
  }

  return dfs(headID, adjacencyList, informTime);
};

const dfs = (currentID, adjacencyList, informTime) => {
  if (adjacencyList[currentID].length === 0) {
    return 0;
  }

  let max = 0;
  const subordinates = adjacencyList[currentID];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(dfs(subordinates[i], adjacencyList, informTime), max);
  }

  return max + informTime[currentID];
};

console.log("LEETCODE #1376 : Time needed to inform all employees.");
console.log("mangagers: ", managers);
console.log("inform time: ", informTime);
console.log(
  "Result: ",
  numOfMinutes(employerCount, headID, managers, informTime)
);

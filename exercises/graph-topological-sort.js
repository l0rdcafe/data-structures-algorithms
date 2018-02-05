class Graph {
  constructor() {
    this.nodes = {};
    this.size = 0;
  }
  addNode(value) {
    if (value === undefined) {
      return;
    }
    this.nodes[value] = this.nodes[value] || [];
    this.size += 1;
  }
  removeNode(value) {
    this.nodes[value].forEach(function(nextEl) {
      const nextNextEl = this.nodes[nextEl];
      const index = nextNextEl.indexOf(value);
      nextNextEl.splice(index, 1);
    });
    delete this.nodes[value];
  }
  contains(value) {
    return this.nodes[value] !== undefined;
  }
  addEdge(value1, value2) {
    if (!this.nodes[value1] || !this.nodes[value2]) {
      return "Invalid node value";
    }
    this.nodes[value1].push(value2);
  }
  topSort() {
    const stack = [];
    const visited = [];

    for (let i = 0; i < this.size; i += 1) {
      visited[i] = false;
    }

    for (let i = 0; i < this.size; i += 1) {
      if (visited[i] === false) {
        this.topSortHelper(i, visited, stack);
      }
    }

    for (let i = 0; i < stack.length; i += 1) {
      if (stack[i] !== undefined && stack[i] !== false) {
        const node = Object.keys(this.nodes)[stack[i]];
        if (this.nodes[node].length === 0) {
          console.log(i, node);
        } else {
          console.log(i, this.nodes);
        }
      }
    }
  }
  topSortHelper(v, visitedNodes, stackNodes) {
    visitedNodes[v] = true;
    const node = Object.keys(this.nodes)[v];
    this.nodes[node].forEach((n, index) => {
      if (!visitedNodes[index]) {
        this.topSortHelper(visitedNodes[index], visitedNodes, stackNodes);
      }
    });
    stackNodes.push(v);
  }
}

const morningRoutine = new Graph();
morningRoutine.addNode("Boil Water");
morningRoutine.addNode("Make Coffee");
morningRoutine.addNode("Shower");
morningRoutine.addNode("Brush Teeth");
morningRoutine.addEdge("Boil Water", "Make Coffee");
morningRoutine.addEdge("Brush Teeth", "Shower");
morningRoutine.addEdge("Brush Teeth", "Boil Water");
morningRoutine.addNode("Drink Coffee");
morningRoutine.addEdge("Make Coffee", "Drink Coffee");
console.log(morningRoutine);
console.log(morningRoutine.topSort());

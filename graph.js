class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    if (value === undefined) {
      return;
    }
    this.nodes[value] = this.nodes[value] || [];
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
    this.nodes[value2].push(value1);
  }
  removeEdge(value1, value2) {
    if (!this.nodes[value1] || !this.nodes[value2]) {
      return "Invalid node value";
    }
    const value1NextEl = this.nodes[value1];
    value1NextEl.splice(value1NextEl.indexOf(value2), 1);
    const value2NextEl = this.nodes[value2];
    value2NextEl.splice(value2NextEl.indexOf(value1), 1);
  }
  hasEdge(value1, value2) {
    return this.nodes[value1].indexOf(value2) > -1;
  }
  forEach(fn) {
    for (const node in this.nodes) {
      fn(node, this.nodes[node], this.nodes);
    }
  }
  traverseDepthFirst(value, fn, visited, distance) {
    if (!this.nodes[value] || typeof fn !== "function") {
      return "Invalid value or function";
    }

    visited = visited || {};
    distance = distance || 0;
    fn(value, distance);
    visited[value] = true;
    this.nodes[value].forEach(function(neighbor) {
      if (visited[neighbor]) {
        return;
      }
      this.traverseDepthFirst(neighbor, fn, visited, distance + 1);
    }, this);
  }
  traverseBreadthFirst(value, fn) {
    if (!this.nodes[value] || typeof fn !== "function") {
      return "Invalid value or function";
    }

    const visited = {};
    let queue = [value];
    visited[value] = 0;
    while (queue.length) {
      const node = queue.shift();
      fn(node, visited[node]);
      const neighbors = this.nodes[node].filter(neighbor => {
        if (visited[neighbor] === undefined) {
          visited[neighbor] = visited[node] + 1;
          return true;
        }
        return false;
      });
      queue = queue.concat(neighbors);
    }
  }
}

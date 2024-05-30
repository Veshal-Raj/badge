class Graph1 {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    hasVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            return true
        } else {
            return false
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].delete(vertex2);
            this.adjacencyList[vertex2].delete(vertex1)
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacent of this.adjacencyList[vertex]) {
            this.removeEdge(adjacent, vertex)
        }
        delete this.adjacencyList[vertex]
    }

    // DFS
    dfs(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        let currrentVal; 
        visited[start] = true
        while(stack.length) {
            currrentVal = stack.pop();
            result.push(currrentVal);
            
            this.adjacencyList[currrentVal].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    // BFS
    bfs(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        let currrentVal; 
        visited[start] = true
        while(queue.length) {
            currrentVal = queue.shift();
            result.push(currrentVal);

            this.adjacencyList[currrentVal].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result
    }

    display() {
        for (let key in this.adjacencyList) {
            console.log(key + ' --->> ' + [...this.adjacencyList[key]])
        }
    }
}


let graph = new Graph1()


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log('bfs -- ',graph.bfs('A'))
console.log('dfs -- ',graph.dfs('A'))
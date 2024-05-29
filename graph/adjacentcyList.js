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

    display() {
        for (let key in this.adjacencyList) {
            console.log(key + ' --->> ' + [...this.adjacencyList[key]])
        }
    }
}


let gp = new Graph1()

gp.addEdge('A', 'B')
gp.addEdge('B', 'C')

gp.display()
console.log('-----------------------')
// gp.removeEdge('A', 'B')
gp.removeVertex('B')
gp.display()

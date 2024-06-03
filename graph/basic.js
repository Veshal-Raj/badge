class Graph {
    #node
    constructor() {
        this.#node = {}
    }

    addNode(node) {
        this.#node[node] = [];
    }

    addEdge(source, destination) {
        if (!this.#node[source] || !this.#node[destination]) {
            return false;
        } 

        if (!this.#node[source].includes(destination)) {
            this.#node[source].push(destination)
        }

        if (!this.#node[destination].includes(source)) {
            this.#node[destination].push(source)
        }
    }
}

const g= new Graph()
g. 
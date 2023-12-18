// What is the output?

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius,
}


console.log(shape.diameter()) // output will be 20
console.log(shape.perimeter()) // output will be NaN

/**
 *      const shape = {
            radius: 10,
            diameter() {
                return this.radius * 2 // here "this" refers to the shape object
            },
            perimeter: () => 2 * Math.PI * this.radius, // here "this" refers to the window object
        }
 */
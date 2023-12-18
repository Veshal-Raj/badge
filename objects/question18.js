// What is Shallow copy and Deep copy?


/**
 *      Shallow Copy:
           - A shallow copy creates a new object or array, 
             but it doesn't create copies of nested objects or
             arrays within the original object or array.
           - The nested objects or arrays are still referenced 
             in the new copy. If you modify a nested object or array
             in the original, it will affect the shallow copy, and vice versa.
           - Shallow copying can be achieved using methods like Object.assign(),
             the spread operator (...), or the Array.from() method.
 */
const originalArray1 = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];

shallowCopy[2][0] = 99;

console.log(originalArray1); // [1, 2, [99, 4]]
console.log(shallowCopy);   // [1, 2, [99, 4]]


/**
 *      Deep Copy:

        - A deep copy creates a completely independent copy of the original object
          or array along with all nested objects and arrays.
        - Modifying the original object or any of its nested structures does not affect
          the deep copy, and vice versa.
        - Deep copying is usually achieved using custom functions or external libraries
          since native JavaScript methods (like JSON.parse(JSON.stringify(obj))) have limitations
          (e.g., inability to handle functions or circular references)
 */

          function deepCopy(obj) {
            if (typeof obj !== 'object' || obj === null) {
              return obj;
            }
          
            let copy;
          
            if (Array.isArray(obj)) {
              copy = [];
              for (let i = 0; i < obj.length; i++) {
                copy[i] = deepCopy(obj[i]);
              }
            } else {
              copy = {};
              for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                  copy[key] = deepCopy(obj[key]);
                }
              }
            }
          
            return copy;
          }
          
          const originalArray = [1, 2, [3, 4]];
          const deepCopy = deepCopy(originalArray);
          
          deepCopy[2][0] = 99;
          
          console.log(originalArray); // [1, 2, [3, 4]]
          console.log(deepCopy);      // [1, 2, [99, 4]]
          
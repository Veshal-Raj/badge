//  Memoize Polyfill

/**
 *      Implement Caching / Memoize function
 *      ====================================
 * 
      const clumsysquare = (num1, num2) => {
          for (let i=1; i<1000000; i++){
          }
              return num1*num2
      }
      
      console.time("First call");
      console.log(clumsysquare(4566,6565995))
      console.timeEnd("First Call")

      console.time("Second call");
      console.log(clumsysquare(4544866,6565995))
      console.timeEnd("Second Call")
 
      */


function myMemoize(fn, context){
    const res = {}
    return function(...args){
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args )
        } 
        return res[argsCache]
    }
}
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i < 1000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct)
console.time("First call");
console.log(memoizedClumsyProduct(47, 456));
console.timeEnd("First Call");

console.time("Second call");
console.log(memoizedClumsyProduct(77, 127));
console.timeEnd("Second Call");

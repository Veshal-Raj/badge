// Time optmization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function(index){

      console.log(a[index])
    }
}

let closure = find()

console.time("6")
closure(6)
console.timeEnd("6")
console.time("12")
closure(50)
console.timeEnd("12")
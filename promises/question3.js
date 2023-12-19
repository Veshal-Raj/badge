// Promises

// console.log("start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) resolve("Promise resolved");
//     else reject("Promise rejected");
//   }, 2000);
// });

// sub.then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// })

// console.log("stop");


console.log("start");

const sub = Promise.resolve("Subscribed to Roadside Coder")

console.log(sub)

sub.then((res) => console.log(res))
.catch((err) => console.log(err))

console.log("stop");

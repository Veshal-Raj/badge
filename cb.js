setTimeout(() => {
  console.log("First timeout");
  setTimeout(() => {
    console.log("Second timeout");
    setTimeout(() => {
      console.log("Third timeout");
    }, 1000);
  }, 1000);
}, 1000);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000)
  .then(() => {
    console.log("First timeout");
    return wait(1000);
  })
  .then(() => {
    console.log("Second timeout");
    return wait(1000);
  })
  .then(() => {
    console.log("Third timeout");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

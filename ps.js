let names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
];

function Givecandidate() {
    let n = names.length;
    if (n<1) return alert('No Candidate Left!!!')
  let randomNumber = Math.floor(Math.random() * n);
  console.log(names[randomNumber]);
  names.splice(randomNumber,1)
  n = names.length
}

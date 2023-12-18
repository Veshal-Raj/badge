// What is the output?

const user = { name: 'Lydia', age: 22};
const admin = { admin: true, ...user};

console.log(admin) // { admin: true, name: 'Lydia', age: 22 }
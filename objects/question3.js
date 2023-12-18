// What is the output?

const obj = {
    a: "one",
    b: "two",
    a: "three",
};

console.log(obj)

/**
 *      here the output will be {a: 'three', b: 'two'}
 *      because here first and third key is sharing the 
 *      same key, so it will give the last updated value 
 *      to the key.
 */
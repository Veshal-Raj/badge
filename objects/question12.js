// What is the output?

function getItems(fruitList, favoriteFruit, ...args) {
    return [...fruitList, ...args, favoriteFruit]
}

console.log(getItems(["banana", "apple"], "pear", "orange"))

// ...args in the getItems argument is a rest operator, so we can only give it in the end
// ...args in the return is a spread operator, which you can give wherever you want

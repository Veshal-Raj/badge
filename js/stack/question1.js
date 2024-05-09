// given an input strings, reverse the order of the words

// Input: "the sky is blue"  ---->>> Output: "blue is the sky"
// Input: "hello world" ---->>> Output: "world hello"
// Input: "a good example" ---->>> Output: "example good a"

function reverseString(str) {
    let words = str.split(' ')
    let stack = []

    for (let i in words) {
        stack.push(words[i])
    }

    let finals = ''

    while(stack.length) {
        const current = stack.pop()
        if (current) {
            finals = finals+ " "+ current
        }
    }
    
    return finals.trim()
}

let input1 = "the sky is blue";
let input2 = "hello world";
let input3 = "a good example"

console.log(reverseString(input1))
console.log(reverseString(input2))
console.log(reverseString(input3))
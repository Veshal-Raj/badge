/**
 *      Given a string s containing just the characters '(', ')', '[',']', '{', '}'
 *      determine if the input string is valid.
 *
 * open brackets must be closed by the same type of brackets.
 * open brackets must be closed in the correct order.
 * every close bracket has a corresponding open bracket of the same type.
 *
 *
 * Input: "()"                ------->>>>           Output: true
 * Input: "()[]{}"            ------->>>>           Output: true
 * Input: "(]"                ------->>>>           Output: false
 *
 */

function isValidParenthis(string) {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      }
      let top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  if (isEmpty(stack)) return true;
}

function isEmpty(stack) {
  return stack.length === 0;
}

let input1 = "()";
let input2 = "()[]{}";
let input3 = "(]";
let input4 = "([]{})";

console.log(isValidParenthis(input1));
console.log(isValidParenthis(input2));
console.log(isValidParenthis(input3));
console.log(isValidParenthis(input4));

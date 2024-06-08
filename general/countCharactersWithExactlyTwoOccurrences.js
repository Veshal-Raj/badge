/**
 *  find the count of character which present twice in given string
 * 
 */



function countCharactersWithExactlyTwoOccurrences (str) {
    let myMap = {};

    for (char of str) {
        if (myMap[char]) {
            myMap[char]++;
        } else {
            myMap[char] = 1;
        }
    }

    let count = 0;
    for (key in myMap) {
        if (myMap[key] === 2) {
            count++
        }
    }

    return count
}

console.log(countCharactersWithExactlyTwoOccurrences('apple'))
console.log(countCharactersWithExactlyTwoOccurrences('balloon'))
console.log(countCharactersWithExactlyTwoOccurrences('lollipop'))
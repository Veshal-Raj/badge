// find the longest word in a sentence

function longestWord(sentence) {
    let longestWord = ''
    let words = sentence.split(' ')
    for (let i=0; i<words.length; i++) {
        if (words[i].length>longestWord.length) {
            longestWord = words[i]
        } else continue
    }
    return longestWord
}


console.log(longestWord('Hello, My name is Veshal.'))
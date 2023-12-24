const fs = require('fs')

const fileName = 'message.txt'

const message = 'This is a sample message!'

fs.writeFile(fileName, message, (err) =>{
    if (err){
        console.error('Error writing to file: ', err);
    } else {
        console.log(`Message has been saved to ${fileName}`)
    }
})
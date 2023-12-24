const fs = require('fs')

const fileName = 'file.xls'

const message = 'Hello World'

fs.writeFile(fileName, message, (err) => {
    if (err) {
        console.log('Error while creating file.')
    } else {
        console.log(`Successfully created ${fileName}`)
    }
})
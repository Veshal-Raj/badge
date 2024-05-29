const cp = require('child_process');
const fs = require('fs');

let progs = {
    list: 'dir',
    mkdir: 'mkdir'
};

// Create a new directory
let mkdirProcess = cp.spawn(progs.mkdir, ['ranjith'], { shell: true });

mkdirProcess.on('close', (code) => {
    if (code === 0) {
        console.log('Directory created successfully.');

        // Create a new file and write content to it
        const filename = 'ranjith/newfile.txt';
        const content = 'Hello, this is a new file!';

        fs.writeFile(filename, content, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File created successfully.');

            // List the contents of the current directory after creating the new file
            let listProcess = cp.spawn(progs.list, [], { shell: true });

            listProcess.stdout.on('data', (data) => {
                console.log(`Output:\n${data.toString()}`);
            });

            listProcess.stderr.on('data', (data) => {
                console.error(`Error:\n${data.toString()}`);
            });

            listProcess.on('close', (code) => {
                if (code !== 0) {
                    console.log(`List process exited with code ${code}`);
                }
            });
        });
    } else {
        console.error(`Mkdir process exited with code ${code}`);
    }
});

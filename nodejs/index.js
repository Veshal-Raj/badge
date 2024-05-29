

const { Worker, isMainThread, parentPort } = require('worker_threads');

let count = 0;

console.log(`isMainThread --- count ${count++} `,isMainThread)
console.log(`parentPort --- count ${count++} `, parentPort)
if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (message) => {
        console.log('Received message from worker:', message);
    });
} else {
    // This code runs in the worker thread
    parentPort.postMessage('Hello from worker!');
}

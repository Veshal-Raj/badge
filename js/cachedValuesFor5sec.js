function calc() {
    let result = 0;
    for (let i=0; i<10; i++) {
        result += i;
    }
    return result
}

function cachedCalc() {
    let cachedResult = null;
    let lastTimeCall = null;
    return function() {
        if (cachedResult !== null && lastTimeCall !== null && (Date.now() - lastTimeCall) < 5000) {
            let result = cachedResult;
            console.log('--------- cached value -----------');
            console.log(result);
            console.log('--------- cached value -----------');
            return result;
        } else {
            let result = calc();
            cachedResult = result;
            lastTimeCall = Date.now()
            console.log('------------ not cached value -----------------')
            console.log(result)
            console.log('------------ not cached value -----------------')
            return result
        }
    }
}

let delayFn = cachedCalc()


setTimeout(() => {
    delayFn()
}, 1000)

setTimeout(() => {
    delayFn()
}, 3000)

setTimeout(() => {
    delayFn()
}, 5000)

setTimeout(() => {
    delayFn()
}, 7000)
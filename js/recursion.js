// reverse an array using recursion


function reverseArr(arr, start=0, end=arr.length-1) {
    if (start>end) {
        return arr
    }

    [arr[start], arr[end]] = [arr[end], arr[start]]
    return reverseArr(arr,start + 1, end - 1)
}

let array = [2,3,4,5,6,7,7]

console.log('reverseArr --- ',reverseArr(array))


function recursion(arr, start=0, end=arr.length-1) {
    if (start>end) {
        return arr
    }
    // [arr[start], arr[end]] = [arr[end], arr[start]]
    [arr[start], arr[end]] = [arr[end], arr[start]];
    return recursion(arr, start + 1, end - 1)
}

console.log('recursion ---',recursion([1, 2, 3, 4, 5]))
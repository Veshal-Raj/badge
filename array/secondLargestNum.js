// Ques 1 - second largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ---->>>>> Output: 34
// Input: [10, 5, 10]  ---->>>> output: 5

// Optimised Approach
function secondLargestOptimized(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i=0; i<arr.length; i++) {
        if (arr[i]>largest) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] !== largest && arr[i]>secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargestOptimized([10, 5, 10]))

// Time complexity - O(n)
// Space complexity - O(1)
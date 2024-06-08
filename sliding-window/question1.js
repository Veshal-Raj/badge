/**
 *      Sliding window maximum
 *      you are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array
 *      to the right. you can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * 
 *      Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
 *      Output: [3, 3, 5, 5, 6, 7]
 */

// Brute Force

function bf(arr, k) {
    const result = []
    const n = arr.length;

    for (let i =0; i<=n-k; i++) {
        let max = arr[i]
        for (let j = 1; j<k; j++) {
            if (arr[i + j] > max) {
                max = arr[j + i]
            }
        }
        result.push(max)
    }
    return result
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;

console.log(bf(nums, k))

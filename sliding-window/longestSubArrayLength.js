const arr = [2, 5, 1, 7, 10];
const K = 14;

function longestSubarrayWithSumAtMostK(arr, k) {
    let start = 0;
    let end = 0;
    let currentSum = 0;
    let maxLength = 0;

    while(end < arr.length) {
        currentSum += arr[end]

        while(currentSum > k && start <= end) {
            currentSum -= arr[start]
            start++
        }
        maxLength = Math.max(maxLength, end - start + 1)
        end++
    }
    return maxLength
}

console.log(longestSubarrayWithSumAtMostK(arr, K))
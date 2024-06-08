const arr = [2, 5, 1, 7, 10];
const k = 14;

function longestSubArray (arr, k) {
    let start = 0;
    let end = 0;
    let currentSum = 0;
    let maxLength = 0;
    let subArrayStart = 0;
    let subArrayEnd = 0;
    while(end < arr.length) {
        currentSum += arr[end];

        while(currentSum > k && start <= end) {
            currentSum -= arr[start];
            start++
        }
     

        if (end - start + 1 > maxLength && currentSum <= k) {
            maxLength = end - start + 1;
            subArrayStart = start;
            subArrayEnd = end
        }
        end++
    }

    return arr.slice(subArrayStart, subArrayEnd + 1)
}

console.log(longestSubArray(arr, k))
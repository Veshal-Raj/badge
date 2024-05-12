// global linear search

const globalLinearSearch = (nums, k) => {
    let results = []
    for (let i=0; i<nums.length; i++) {
        if (k === nums[i]) results.push(i)
    }

    if (results.length === 0) return -1
    else return results
}

console.log(globalLinearSearch([1,2,3,4,2,3,4,5,2,3,4], 2))
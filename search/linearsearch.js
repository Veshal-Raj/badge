const linearSearch = (nums, target) => {
    for (let i=0; i<nums.length; i++) {
        if (target === nums[i]) return i
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5,6,7], 3))
console.log(linearSearch([1,2,3,4,5,6,7], 0))
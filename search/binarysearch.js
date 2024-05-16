const binarySearch = (nums, k) => {
  let start = 0;
  let end = nums.length ;
  while (start < end) {
    let middle = Math.floor((end + start) / 2);
    if (nums[middle] === k) return middle;
    else if (k > nums[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1
};


console.log(binarySearch([1,1,2,3,4,5], 5))
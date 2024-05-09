// find the triplet of the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let target = 12;

function triplet(arr, target) {
  arr.sort((a, b) => a - b);
  let sumOfJK = 0;
  let j = 1,
    k = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    sumOfJK = target - arr[i];

    while (j < k) {
      let val = arr[j] + arr[k];
      if (val === sumOfJK) return [arr[i], arr[j], arr[k]];
      if (val > sumOfJK) {
        k = k - 1;
        break;
      }
      if (val < sumOfJK) {
        j = j + 1;
        break;
      }
    }
  }
  return []
}

console.log(triplet(arr, target));

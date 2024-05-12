function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0]
    let left = []
    let right = []
     for (let i=1; i<arr.length; i++) {
        if (arr[i]<pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
     }
     return [...quickSort(left), pivot, ...quickSort(right)]
}



console.log(quickSort([64, 25, 12, 22, 11, 36, 42]))

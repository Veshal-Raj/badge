function bubbleSort(arr){
    const n= arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++) {
            if (arr[j]<arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

const arr1 = [64, 34, 25, 12, -22, 11, 90];
console.log('sorted array ',bubbleSort(arr1))
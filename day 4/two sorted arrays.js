function findMedianSortedArrays(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);

  const length = combinedArray.length;
  if (length % 2 === 0) {
    const mid1 = combinedArray[length / 2 - 1];
    const mid2 = combinedArray[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    return combinedArray[Math.floor(length / 2)];
  }
}

// Example usage:
const arr1 = [1, 3, 8];
const arr2 = [4, 6, 9];
const median = findMedianSortedArrays(arr1, arr2);
console.log(median); 
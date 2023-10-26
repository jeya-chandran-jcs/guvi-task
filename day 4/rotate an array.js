function rotateArray(arr, k) {
  const length = arr.length;
  if (length === 0 || k === 0) {
    return arr;
  }
  const rotationCount = k % length;

  const rotatedArray = arr.slice(length - rotationCount).concat(arr.slice(0, length - rotationCount));

  return rotatedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(originalArray, k);
console.log(rotatedArray); // Output will be [4, 5, 1, 2, 3]

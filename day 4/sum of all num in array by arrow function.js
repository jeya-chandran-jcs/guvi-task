const numbers = [1, 2, 3, 4, 5];

const sum = (arr) => {
  return arr.reduce((total, current) => total + current, 0);
};

const result = sum(numbers);
console.log(result); // Output will be 15 (1 + 2 + 3 + 4 + 5)

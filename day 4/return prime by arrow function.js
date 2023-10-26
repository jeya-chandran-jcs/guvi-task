const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = (arr) => {
  return arr.filter((number) => isPrime(number));
};

const result = primeNumbers(numbers);
console.log(result); 
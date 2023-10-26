const strings = ["level", "hello", "racecar", "world", "deified"];

const findPalindromes = function(arr) {
  const isPalindrome = function(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  };

  const palindromeStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromeStrings.push(arr[i]);
    }
  }
  return palindromeStrings;
};

const palindromeArray = findPalindromes(strings);
console.log(palindromeArray); 
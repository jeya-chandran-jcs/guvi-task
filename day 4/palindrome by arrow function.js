const strings = ["level", "hello", "racecar", "world", "deified"];

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); 
  const reversedStr = cleanStr.split('').reverse().join(''); 
  return cleanStr === reversedStr; 
};

const palindromeStrings = (arr) => {
  return arr.filter((string) => isPalindrome(string));
};

const result = palindromeStrings(strings);
console.log(result); 
const stringArray = ["hello world", "javascript is awesome", "title case example"];

const convertToTitleCase = (arr) => {
  return arr.map((str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  });
};

const titleCaseArray = convertToTitleCase(stringArray);
console.log(titleCaseArray);

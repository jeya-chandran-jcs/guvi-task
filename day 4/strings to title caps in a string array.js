const stringArray = ["hello world", "javascript is awesome", "title case example"];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
})(stringArray);

console.log(stringArray);
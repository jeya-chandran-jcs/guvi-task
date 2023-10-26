const jsonData = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

// Using for in loop
console.log("Using for...in loop:");
for (let key in jsonData) {
  if (jsonData.hasOwnProperty(key)) {
    console.log(key, jsonData[key]);
  }
}

// Using for of loop 
console.log("\nUsing for...of loop:");
const values = Object.values(jsonData);
for (let value of values) {
  console.log(value);
}

// Using forEach 
console.log("\nUsing forEach:");
Object.values(jsonData).forEach((value) => {
  console.log(value);
});

// Using for loop
for(let i=0;i<jsonData;i++)
{
  console.log(jsonData[i])
}

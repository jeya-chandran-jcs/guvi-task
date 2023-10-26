function compareJSON(obj1, obj2) {
    const str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

 
    return str1 === str2;
}


const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };

if (compareJSON(obj1, obj2)) {
    console.log("The JSON objects are equivalent.");
} else {
    console.log("The JSON objects are not equivalent.");
}
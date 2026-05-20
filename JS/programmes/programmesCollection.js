
//1. Eliminate the duplicate values from array
const array = [1, 2, 3, 2, 3, 2, 5, 6, 2];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); //[ 1, 2, 3, 5, 6 ]

//2. int to string conversion
//2.1
const num = 32;
const numStr = num + "";
console.log(numStr);
//prove 'numStr' is a string
console.log(typeof numStr); //string
console.log(numStr + 10); //3210

//2.2
const num1 = 45;
const numStr1 = String(num1);
console.log(numStr1); //45
console.log(typeof numStr1); //string

//3. float to int
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum); //3

//4. int to float
const intNum1 = 57;
const floatNum1 = parseFloat(intNum1);
console.log(floatNum1.toFixed(2));

//4. check if a variable is a number
const value = 56;
if (typeof value === "number" && !isNaN(value)) {
  console.log(`${value} is a number.`);
} else {
  console.log(`${value} is not a number.`);
}

const value1 = "56";
if(typeof value1 === "number" && ! isNaN(value1)){
  console.log(`${value1} is a number`);
} else{
   console.log(`${value1} is not a number`);
}

//5. swap variable values
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);

let c = 60;
let d = 70;
[c, d] = [d, c]
console.log(d, c);

//6. check if an object has a property
const person = {
  name: "John",
  age: 28
};
if (person.hasOwnProperty("name")) {
  console.log("Person has name property.");
}

const person1 = {
  name: "Sachin",
  age: 36
};
if(person1.hasOwnProperty("age")){
    console.log("Person has age property.");
}

//7. remove falsy value from the array: (false, 0, "", null, undefined, NaN):
const values = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];
const newValue = values.filter(Boolean);
console.log(newValue); //[ 1, 2, 3, 4 ]

//8. String --> UpperCase, LowerCase
const str = "Naveen Automation Labs";
console.log(str.toUpperCase()); //NAVEEN AUTOMATION LABS
console.log(str.toLowerCase()); //naveen automation labs

//9. check if array contains a specific value
const lang = ["Java", "JavaScript", "Python", "Ruby"];
if (lang.includes("JavaScript")) {
  console.log("found..");
}

//10. check if an array is an empty array
const empty = [];
if (empty.length === 0) {
  console.log("Array is empty.");
} else {
  console.log("Array is not empty.");
}

//11. generate a random number
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number: ${randomNum}`);

//12. String to number
const strNumber = "32.001";
const x1 = parseInt(strNumber);
const x2 = parseFloat(strNumber);
console.log(`Integer: ${x1} | Float: ${x2}`);

//13. Join array elements into a string:
const words = ["Hello", "Naveen"];
const joinedWords = words.join(" ");
console.log(joinedWords);

//14. get object property
const user = {
  name: "Tom",
  age: 25,
  dob: "01-01-1995"
};
console.log(user["name"]); //Tom
console.log(user["age"]); //25
console.log(user["dob"]); //01-01-1995

//15. clone an array or object --> use spread operator
const marks = [10, 20, 30, 50, 66, 70];
const duplicateMarks = [...marks];
console.log(duplicateMarks); //[ 10, 20, 30, 50, 66, 70 ]
//duplicate object
const duplicateUser = { ...user };
console.log(duplicateUser); //{ name: 'Tom', age: 25, dob: '01-01-1995' }

//16.
const employee = {
  name: "Tom",
  age: 25,
  dob: "01-01-1995"
};
//a. keeysArray
const keeysArray = Object.keys(employee);
console.log(keeysArray); //[ 'name', 'age', 'dob' ]

//b. valuesArray
const valuesArray = Object.values(employee);
console.log(valuesArray); //[ 'Tom', 25, '01-01-1995' ]

//c.
const keysValuesArray = Object.entries(employee);
console.log(keysValuesArray); //[ [ 'name', 'Tom' ], [ 'age', 25 ], [ 'dob', '01-01-1995' ] ]

//17. current date and time
const currentDateAndTime = new Date();
console.log(`Current date and time: ${currentDateAndTime.toLocaleString()}.`);
//Current date and time: 1/27/2025, 12:15:45 PM.

//18. variable is defined or not
let i;
//console.log(i); //undefined
if (typeof i === "undefined") {
  console.log("Variable is not defined.");
} else {
  console.log("Variable 'i' is defined.");
}

//19. truncate an array
const testing = [0, 1, 2, 3, 4, 5, 6, 7];
testing.length = 3;
console.log(testing); //[ 0, 1, 2 ]

//20. Last item in the array
const test1 = [0, 1, 2, 3, 4, 5, 6, 7];
const lastEleOfTheArray = test1.slice(-1);
console.log(lastEleOfTheArray); //[ 7 ]

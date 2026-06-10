
//Interview programs

//1. count frequency of characters
function getCharFreq(strg){
	let freq = {};
    for(let char of strg){
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
let str = "Hhello world.."
console.log(getCharFreq(str));


//2. Reverse a string
function reverseTheString(str){
    return str.split("").reverse().join("");
}
console.log(reverseTheString("Sachin Ade."))


//3. Write a Program to check whether a string is a palindrome string.
function isPalindrome(str){
    const reversedString = reverseTheString(str);
    return str == reversedString;
}
console.log(isPalindrome("abba"));

//Largest no. in an array
function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));


//Rotate elements of array to left
const fruits = ["Banana", "Apple", "Mango", "Orange"];
let n = 2;
for (let i = 1; i <= n; i++) {
    let ele = fruits.shift();
    fruits.push(ele);
}
console.log(fruits);
//o/p: [ 'Mango', 'Orange', 'Banana', 'Apple' ]


//Rotate elements of array to right
for (let i = 1; i <= n; i++) {
    let ele = fruits.pop();
    fruits.unshift(ele);
}
console.log(fruits);
//o/p: [ 'Mango', 'Orange', 'Banana', 'Apple' ]


//Remove element of an array using splice():
const numbers = [1, 2, 3, 4, 5];
const num1 = numbers.splice(0, 1);
console.log(num1);
console.log(numbers);
console.log(numbers.toString());


//find():
const numbers1 = [4, 9, 16, 25, 29];
let first = numbers1.find((value) => {
    return value > 40;
});
console.log(first);


//Ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b;
});
console.log(points);//[ 1, 5, 10, 25, 40, 100 ]


//Descending order
points.sort(function (a, b) {
    return b - a;
})
console.log(points);//[ 100, 40, 25, 10, 5, 1 ]


//Min number
let arr = [1, 2, 3];
const min = Math.min.apply(null, arr);
console.log(min);

//OR

console.log(Math.min(...arr));


//Max number
const max = Math.max.apply(null, arr);
console.log(max);

//OR

console.log(Math.max(...arr));


//Reverse the words in a string
let strN1 = "My name is Sachin.";
let strN2 = strN1.split(" "); // Split into words
let reversedWords = strN2.map(word => word.split("").reverse().join("")); // Reverse each word
let finalStr = reversedWords.join(" "); // Keep word order, join with space
console.log(finalStr); // Output: "yM eman si .nihcaS"

/*
const customPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('promise resolved.')
    }, 1000);
})

cy.wrap(customPromise).then((result)=>{
    expect(result).to.eq('promise resolved.');
})
*/


//Eliminate duplicate characters from the given string
let strNew = "aababdbccdddefghefg";
let arry1 = strNew.split("");
let st = new Set(arry1);
let arry2 = Array.from(st);
let strUpdated = arry2.join("");
console.log(strUpdated);
//o/p: abdcefgh

//OR
console.log('==================================');

let arry3 = [...new Set(arry1)]
console.log(arry3);
console.log(arry3.join());

//OR
console.log('==================================');

let arry4 = [...st]
console.log(arry4);
console.log(arry4.join());

//OR
console.log('==================================');

let arry5 = [...new Set([...strNew])]
console.log(arry5.join().replaceAll(',', ''));

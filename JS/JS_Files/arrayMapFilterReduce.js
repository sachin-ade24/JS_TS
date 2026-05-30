
//1. Map: transform every element of the given array
/*
map():
    (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
    Calls a defined callback function on each element of an array, and returns an array that contains the results.

    @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

    @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
let num = [1, 2, 3, 4, 5];

let n1 = num.map((m)=>m*3);
console.log(n1);//[ 3, 6, 9, 12, 15 ]

n1 = num.map((m)=>{
    return m*3;
});
console.log(n1);//[ 3, 6, 9, 12, 15 ]

//Twice of each array element:
let numTwice = num.map(n => n * 2);
console.log(numTwice);//[ 2, 4, 6, 8, 10 ]

//Square of each array element:
let numSqr = num.map(n => Math.pow(n, 2)); 
/*
or:
let numSqr = num.map(n => n * n);
*/
console.log(numSqr);//[ 1, 4, 9, 16, 25 ]

//Convert/transform all elements to upper case
let family = ['Sachi', 'Prince', 'Kalpana', 'Sachin'];
let familyUpperCase = family.map(f => f.toUpperCase());
console.log(familyUpperCase);//[ 'SACHI', 'PRINCE', 'KALPANA', 'SACHIN' ]

//Update strings in the array:
let softwareTools = ['Selenium', 'Cypress', 'Playwright', 'WebDriverIO'];
let softwareToolsWithLang = softwareTools.map(st => st.concat(' with JavaScript'));
console.log(softwareToolsWithLang);
/*
[
  'Selenium with JavaScript',
  'Cypress with JavaScript',
  'Playwright with JavaScript',
  'WebDriverIO with JavaScript'
]
*/


console.log('======================================================================');


//2. Filter: Filter the data or obtaining an array of elements that satisfy the condition.
/*
filter():
    (method) Array<number>.filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)
    Returns the elements of an array that meet the condition specified in a callback function.

    @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

    @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter(n => n%2 === 0);
console.log(evenNumbers);//[ 2, 4, 6 ]

let oddNumbers = numbers.map(m => m * 3).
            filter(f => f%2 != 0);
console.log(oddNumbers);//[ 3, 9, 15, 21 ]

let numbersGreaterThan3 = numbers.filter(n => n>3);
console.log(numbersGreaterThan3);//[ 4, 5, 6, 7 ]

let names = ['Naveen', 'Ankita', 'Priyatosh', 'Jay', 'om'];
let namesLengthGreaterThan3 = names.filter(n => n.length > 3);
console.log(namesLengthGreaterThan3);//[ 'Naveen', 'Ankita', 'Priyatosh' ]

let productData = ['Apple Mackbook', 'Apple Iphone', 'Samsung Galaxy', 'Cannon Camera', 'LG TV', 'Sony Walkman', 'Apple Air'];
/*
let appleProducts = productData.filter(p => p.includes('Apple')).filter(a => a.includes('Iphone')).map(f => f.toUpperCase());
console.log(appleProducts);
//o/p: [ 'APPLE IPHONE' ]
*/

let appleProducts = productData.filter(p => p.includes('Apple'));
console.log(appleProducts);//[ 'Apple Mackbook', 'Apple Iphone', 'Apple Air' ]
let filteredPhone = appleProducts.filter(a => a.includes('Iphone'));
console.log(filteredPhone);//[ 'Apple Iphone' ]
let upperCaseIphone = filteredPhone.map(f => f.toUpperCase());
console.log(upperCaseIphone);//[ 'APPLE IPHONE' ]


console.log('======================================================================');


//3. Reduce: Combine everything into one value

let numArr = [10, 20, 30, 40, 50];
let reducedNumArr = numArr.reduce((acc, n) => acc + n, 0);
console.log(reducedNumArr);//150

let empAddress = ['500', 'Rainbow Apartments', 'Pune', 'India'];
let reducedAddress = empAddress.reduce((r, n) => r.concat(`${n} `), '');
console.log(reducedAddress.trim());//500 Rainbow Apartments Pune India

let allInOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = allInOne.filter(f => f%2 === 0).map(m => Math.pow(m, 2)).reduce((acc, n) => acc + n, 0);
console.log(result);//220

const ob = allInOne.reduce((acc, e)=>{
    acc[e] = (acc[e] || 0) + 1;
    return acc;
}, {});

console.log(ob);

//Arrow function:
/*
Arrow function:
    - Has no name: Anonymus function
    - Used in callback function
    - No keyword like 'function' used
*/

//1. No parameter arroe function:
let print = () => console.log('Learning JavaScript');
print();//Learning JavaScript


//2. One parameter:
let printName = (name) => console.log(name);
printName('Sachin');//Sachin

console.log('======================================================================');

//3. 
let add_a = (a) => console.log(a+10);
add_a(20);//30

console.log('======================================================================');

let printNum = (num) => console.log(`I have ${num} mangoes`);
printNum(10);//I have 10 mangoes

console.log('======================================================================');

//We can pass one parameter without bracket: (This is valid for a single prameter.)
let printTotal = total => console.log(total + 100);
printTotal(200);

console.log('======================================================================');

let printBill = (bill) => {
    console.log(bill+90)
};
printBill(200);//290

console.log('======================================================================');

let pro = (a) => a + 4;
console.log(pro(200));//Valid
let r1 = pro(100);
console.log(r1);//Valid
/*
204
104
*/

/**
 * 
 * @param {string} name 
 * @returns 
 */
let convertToLowerCase = (name) => name.toLowerCase();
console.log(convertToLowerCase('SaChIn'));//sachin
let lowerCaseWord = convertToLowerCase('KalPAna');
console.log(lowerCaseWord);//kalpana

console.log('======================================================================');

let add_a_b = (a, b) => a + b;
let sum = add_a_b(24, 42);
console.log(sum);//66

console.log('======================================================================');

let initBrowser = (browserName) => {
    console.log(`Browser name is: ${browserName}`);

    switch(browserName.trim().toLowerCase()){
        case 'chrome':
            console.log('Launch chrome');
            return true;
        case 'edge':
            console.log('Launch edge');
            return true;
        case 'firefox':
            console.log('Launch firefox');
            return true;
        default:
            console.log('Please pass the right browser.');
            return false;
    }
}
initBrowser('chrome');
/*
Browser name is: chrome
Launch chrome
*/

let flag = initBrowser('chrome');
console.log(flag);
/*
Browser name is: chrome
Launch chrome
true
*/

//utilize rest parameter in arrow function:
let printDetails = (...details) => {
    console.log(details);
    console.log(details.length);
    return 1;
};
printDetails('Sachin', 'Kalpana');
/*
[ 'Sachin', 'Kalpana' ]
2
*/
let s1 = printDetails('Sachi', 'Prince', 'Kalpana', 'Sachin');
console.log(s1);
/*
[ 'Sachi', 'Prince', 'Kalpana', 'Sachin' ]
4
1
*/

let restDevices = (...devices) => {
    console.log(devices);
}
restDevices(['iPhone', 'Macbook'], ['Samsung Galaxy Tab', 'Samsung Watch']);
/*
[ [ 'iPhone', 'Macbook' ], [ 'Samsung Galaxy Tab', 'Samsung Watch' ] ]
*/


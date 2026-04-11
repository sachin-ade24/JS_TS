/*
functions are non-premitive data. function is stored in 'heap' memory.
*/

//1. a simple function: no input, no return
//a)
function func(){
    console.log('My first function.');
}
//call the function fun:
func();//My first function.
//b)
function printInfo(){
    console.log('Hello automation.');
}
printInfo();//Hello automation.


console.log('======================================================================');


//2. a function with no input but returns something
function getTrainerName(){
    let trainerName = 'Naveen';
    return trainerName;
}
console.log(`The trainer name is: ${getTrainerName()}`);//The trainer name is: Naveen

//A better approach:
function getCity(){
    let cityName = 'Pune';
    return cityName;
}
let city = getCity();
console.log(`Name of the city is: ${city}`);//Name of the city is: Pune


console.log('======================================================================');


//3. function with input and return:
//Provide documentation to recognize types in JS:
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function getSumOfNums(a, b){//a and b are parameters not arguement
    let sum = a + b;
    return sum;
}
let addition = getSumOfNums(1, 10);//1 and 10 are values or arguements not parameters --> This is called 'call by value'.
console.log(addition);//11
console.log(typeof addition);//number


console.log('======================================================================');


//Some examples:
//Example1:
/**
 * 
 * @param {string} studentName 
 * @param {number} e1 
 * @param {number} e2 
 * @returns 
 */
function getMarks(studentName, e1, e2){
    let marks = e1 + e2;
    if(!studentName){
        return -1;
    } else{
        return marks;
    }
}

let marksOfStudent1 = getMarks('Sachin', 30, 30);
console.log(marksOfStudent1);//60

let marksOfStudent2 = getMarks(null, 25, 25);
console.log(marksOfStudent2);//-1


//Example2:
/**
 * 
 * @param {string} studentName 
 * @returns 
 */
function getStudentMarks(studentName){
    process.stdout.write(`Obtaining ${studentName}'s marks: `);

    if(studentName === 'Ravi'){
        return 90;
    } else if(studentName === 'Uday'){
        return 80;
    } else if(studentName === 'Ankit'){
        return 100;
    } else {
        return `${-1}. Student name is not found.`;
    }
};

let studentMarks = getStudentMarks('Sachin');
process.stdout.write(`${studentMarks}`);
//Obtaining Sachin's marks: -1. Student name is not found.

console.log();

//Update the function --> make it better
/**
 * 
 * @param {string} studentName 
 * @returns this function returns the student marks.
 */
function getMarksForStudents(studentName){
    process.stdout.write(`Obtaining ${studentName}'s marks: `);
    let marks = -1;

    if(studentName === 'Ravi'){
        marks =  90;
    } else if(studentName === 'Uday'){
        marks = 80;
    } else if(studentName === 'Ankit'){
        marks = 100;
    } else {
        process.stdout.write(`${studentName} is not found.`);
    }

    return marks;
}

let result = getMarksForStudents('Ravi');
console.log(result);


console.log('======================================================================');


//switch..case:
/**
 * 
 * @param {string} browserName 
 * @returns the browser
 */
function launchBrowser(browserName){
    let browser = browserName.trim().toLowerCase();
    switch(browser){
        case 'chrome':
            console.log('Launch chrome..');
            break;
        case 'edge':
            console.log('Launch edge..');
            break;
        case 'firefox':
            console.log('Launch firefox..');
            break;
        case 'safari':
            console.log('Launch safari..');
            break;
        default:
            console.log('Please provide the right browser..');
            break;
    }
    return browser;
}

let br = launchBrowser('chrome');
console.log(br);

console.log('======================================================================');

/**
 * 
 * @param {string} studentName 
 * @returns the marks obtained by student
 */
function getMarksOfStudents(studentName){
    let student = studentName.trim().toLowerCase();
    let marks;
    switch(student){
        case 'ravi':
            marks = 90;
            break;
        case 'uday':
            marks = 80;
            break;
        case 'ankit':
            marks = 100;
            break;
        default:
            console.log('Please provide valid student name.');
            marks = -1;
            break;
    }
    return marks;
}

let r = getMarksOfStudents('Sachin');
console.log(r);

console.log('======================================================================');

//Another approach: return and break cannot be together.
/**
 * 
 * @param {string} studentName 
 * @returns 
 */
function fetchStudentMarks(studentName){
    let student = studentName.trim().toLowerCase();
    switch(student){
        case 'ravi':
            return 90;
        case 'uday':
            return 80;
        case 'ankit':
            return 100;
        default:
            return -1;
    }
}

let re = fetchStudentMarks('ankit');
console.log(re);

console.log('======================================================================');

/**
 * 
 * @param {number} productPrice 
 * @param {number} tax 
 * @param {number} lateFee 
 * @returns this will return the total billing amount
 */
function getTotalBilling(productPrice, tax, lateFee){
    return productPrice + tax + lateFee;
};
let totalBill = getTotalBilling(500, 50, 5);
console.log(totalBill);
console.log(typeof getTotalBilling); //function
console.log(typeof totalBill);//number
console.log(getTotalBilling.name);//getTotalBilling
console.log(getTotalBilling.length);//3 --> gives no. of arguments



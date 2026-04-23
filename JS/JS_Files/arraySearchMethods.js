//1. indexOf();
const fruits = ["Apple", "Orange", "Apple", "Mango"];
const apple_1stOccurrence = fruits.indexOf('Apple');
console.log(apple_1stOccurrence);//0
const apple_2ndOccurrence = fruits.indexOf('Apple', apple_1stOccurrence + 1);
console.log(apple_2ndOccurrence);//2

//2. lastIndexOf():
const appleLastIndex = fruits.lastIndexOf("Apple");
console.log(appleLastIndex);


console.log('======================================================================');


//3. includes():
/*
    (method) Array<string>.includes(searchElement: string, fromIndex?: number | undefined): boolean
    Determines whether an array includes a certain element, returning true or false as appropriate.

    @param searchElement — The element to search for.

    @param fromIndex — The position in this array at which to begin searching for searchElement.
*/
const includesFlag = fruits.includes('Apple');
console.log(includesFlag);//true
console.log(fruits.includes('Grapes'));//false


console.log('======================================================================');


//4. find():
/*
    The find() method returns the value of the first array element that passes a test function.
*/
const numbers = [4, 9, 16, 25, 29];
const firstElement = numbers.find((n) => n > 10);
console.log(firstElement);//16

const subs = ["Maths", "Physics", "Chemistry", "Biology"];
const firstSubject = subs.find((sub) => {
    return sub.includes('i');
});
console.log(firstSubject);//Physics


console.log('======================================================================');


//5. findIndex():
/*
    The findIndex() method returns the index of the first array element that passes a test function.
*/
const numbersArr = [4, 9, 16, 25, 29];
const firstElementIndex = numbersArr.findIndex((n) => {
    return n % 2 == 0;
});
console.log(firstElementIndex);//0


console.log('======================================================================');


//6. findLast():
/*
    method that will start from the end of an array and return the value of the first element that satisfies a condition.
*/
const evenNumbs = [0, 2, 10, 20, 40, 50];
const findLastEvenNums = evenNumbs.findLast((lastNum) => lastNum % 2 == 0 && lastNum >= 20);
console.log(findLastEvenNums);//50


console.log('======================================================================');


//7. findLastIndex():
/*
    The findLastIndex() method finds the index of the last element that satisfies a condition.
*/
const langs = ["JavaScript", "Java", "Python", "C++", "Java", "C", "Java"];
const langLastIndx = langs.findLastIndex((lang) => lang.includes('J'));
console.log(langLastIndx);

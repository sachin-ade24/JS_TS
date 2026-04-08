
/*
1. push():
    (method) Array<number>.push(...items: number[]): number

    Appends new elements to the end of an array, and returns the new length of the array.

    @param items — New elements to add to the array.
*/

let num = [10, 20, 30, 40];
console.log(num.length);
console.log(num);
console.log(num.push(50));
console.log(num);
let l1 = num.push(60, 70, 80, 90);
if(l1===num.length){
    console.log(num);
}
/*
[
  10, 20, 30, 40, 50,
  60, 70, 80, 90
]
*/

/*
//Valid
let newNum = [100, 200];
num.push(newNum);
console.log(num);//[ 10, 20, 30, 40, 50, 60, 70, 80, 90, [ 100, 200 ] ]
*/

let num1 = [100, 200]
num.push(...num1);
console.log(num);
/*
[
   10, 20, 30, 40,  50,
   60, 70, 80, 90, 100,
  200
]
*/



/*
2. unshift():
    (method) Array<number>.unshift(...items: number[]): number

    Inserts new elements at the start of an array, and returns the new length of the array.

    @param items — Elements to insert at the start of the array.

*/

let arrayNum = [1, 2, 3, 4];
arrayNum.unshift(5);
console.log(arrayNum);//[ 5, 1, 2, 3, 4 ]

let newArrayNum = [6, 7];
arrayNum.unshift(...newArrayNum);
console.log(arrayNum);
/*
[
  6, 7, 5, 1,
  2, 3, 4
]
*/

arrayNum.unshift(10, 9, 5);
console.log(arrayNum);
/*
[
  10, 9, 5, 6, 7,
   5, 1, 2, 3, 4
]
*/



/*
pop():
    (method) Array<number>.pop(): number | undefined

    Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
*/
let numArr = [10, 1, 20, 2, 30, 3, 40, 4];
console.log(numArr);
/*
[
  10, 1, 20, 2,
  30, 3, 40, 4
]
*/
console.log(numArr.length);//8
let lastNum = numArr.pop();
console.log(lastNum);//4
console.log(numArr);
/*
[
  10, 1, 20, 2,
  30, 3, 40
]
*/
console.log(numArr.length);//7



/*
shift():
   (method) Array<number>.shift(): number | undefined

    Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
*/
let arrayNumbers = [1, 9, 2, 8, 3, 7, 4, 6];
console.log(arrayNumbers);
/*
[
  1, 9, 2, 8,
  3, 7, 4, 6
]
*/
console.log(arrayNumbers.length);//8
let firstNum = arrayNumbers.shift();
console.log(firstNum);//1
console.log(arrayNumbers);
/*
[
  9, 2, 8, 3,
  7, 4, 6
]
*/
console.log(arrayNumbers.length);//7



/*
splice();
    (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)

    Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

    @param start — The zero-based location in the array from which to start removing elements.

    @param deleteCount
    The number of elements to remove. Omitting this argument will remove all elements from the start paramater location to end of the array. 
    If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function 
    will evaluate the argument as zero and not remove any elements.

    @returns — An array containing the elements that were deleted.
*/
let fruits = ['Apple', 'Grapes', 'Banana' , 'Orange'];
console.log(fruits);//[ 'Apple', 'Grapes', 'Banana', 'Orange' ]
let removedFruits = fruits.splice(2, 1);//Gives back the array of the removed elements
console.log(fruits);//[ 'Apple', 'Grapes', 'Orange' ]

//Add the new element at your desired index:
//push() can be done by using this:
fruits.splice(3, 0, 'Guava');//Here adding 'Guava' at the end of the array --> Meaning push(''Guava'') operation is happening here.
console.log(fruits);//[ 'Apple', 'Grapes', 'Orange', 'Guava' ]

//unshift() operation can be done by using splice() i.e. a single or multiple elements can be added at the beginning of the array, given below:
fruits.splice(0, 0, 'Muskmelon', 'Watermelon');
console.log(fruits);//[ 'Muskmelon', 'Watermelon', 'Apple', 'Grapes', 'Orange', 'Guava' ]

//shift() operation: It can remove a single or multiple elements from beginning of the array
fruits.splice(0, 1);
console.log(fruits);//[ 'Watermelon', 'Apple', 'Grapes', 'Orange', 'Guava' ]

//pop() can also be done:
fruits.splice(fruits.length-1, 1);
console.log(fruits);//[ 'Watermelon', 'Apple', 'Grapes', 'Orange' ]

//Splice can combine two arrays:
let newFruits = ['Strawberry', 'Cherry'];
fruits.splice(fruits.length, 0, ...newFruits);
console.log(fruits);//[ 'Watermelon', 'Apple', 'Grapes', 'Orange', 'Strawberry', 'Cherry' ]

//Add Berries at the end:
fruits.splice(fruits.length, 0, 'Berries');
console.log(fruits);
/*
[
  'Watermelon',
  'Apple',
  'Grapes',
  'Orange',
  'Strawberry',
  'Cherry',
  'Berries'
]
*/

//Replace Berries by Coconut
fruits.splice(fruits.length-1, 1, 'Coconut');
console.log(fruits);
/*
[
  'Watermelon',
  'Apple',
  'Grapes',
  'Orange',
  'Strawberry',
  'Cherry',
  'Coconut'
]
*/

//Splice can clear the array:
fruits.splice(0, fruits.length);
console.log(fruits);//[]



/*
indexOf():
    (method) Array<number>.indexOf(searchElement: number, fromIndex?: number | undefined): number

    Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

    @param searchElement — The value to locate in the array.

    @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
*/
let marks = [1, 2, 3, 4, 1, 5, 6, 1];
console.log(marks.indexOf(1, marks.indexOf(1)+1));//4
console.log(marks.indexOf(7));//-1
console.log(marks.indexOf(1, marks.indexOf(1, marks.indexOf(1)+1)+1));//7
console.log(marks.lastIndexOf(1));//7



/*
lastIndexOf():

*/
console.log(marks.lastIndexOf(1));//7

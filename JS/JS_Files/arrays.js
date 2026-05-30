//Collection of similar or different types of data
//Array: []

let num = [10, 20, 30, 40];

console.log(num);

console.log(num[0]);//10
console.log(num[3]);//20
console.log(num[-1]);//undefined
console.log(num[4]);//undefined

console.log('======================================================================');

//length:
console.log(num.length);//4
console.log(num[num.length-1])//40

console.log('======================================================================');

num[4] = 5;
console.log(num);//[ 10, 20, 30, 40, 5 ]
console.log(num.length);//5

console.log('======================================================================');

num[10]=100;
console.log(num);//[ 10, 20, 30, 40, 5, <5 empty items>, 100 ]
console.log(num[8]);//undefined
console.log(num[9]);//undefined
console.log(num[10]);//100
console.log(num.length);//11

console.log('======================================================================');

//Replace 
num[8] = 90;
console.log(num);//[ 10, 20, 30, 40, 5, <3 empty items>, 90, <1 empty item>, 100 ]

console.log('======================================================================');

let strName = ['Sachin1', 'Sachin2'];
console.log(strName);//[ 'Sachin1', 'Sachin2' ]
strName[0] = 'Sachinnnn0';
console.log(strName);//[ 'Sachinnnn0', 'Sachin2' ]
strName[4] = 'Sachinnnn0';
console.log(strName);//[ 'Sachinnnn0', 'Sachin2', <2 empty items>, 'Sachinnnn0' ]

console.log('======================================================================');

//Array with dufferent data types
let empData =['Sachinn', 37, 'QA', 'Citi', 10, true];
console.log(empData);//[ 'Sachinn', 37, 'QA', 'Citi', 10, true ]
console.log(typeof empData);//object

console.log('======================================================================');

//const array
const c = [10, 20, 30, 40];
c[0] = 500;
console.log(c);

//not allowed --> at run time
//1.
//const c = [11, 12, 24, 67];//SyntaxError: Identifier 'c' has already been declared
//2.
//c = [11, 12, 24, 67];// TypeError: Assignment to constant variable.

console.log('======================================================================');

const p = [10, 20, 30];
console.log(p);//[ 10, 20, 30 ]
p[3] = 40;
console.log(p);//[ 10, 20, 30, 40 ]
p[5] = 70;
console.log(p);//[ 10, 20, 30, 40, <1 empty item>, 70 ]

console.log('======================================================================');

let numArr = Array.of(1, 2, 3, 4);
/*
Array.of():
  (method) ArrayConstructor.of<number>(...items: number[]): number[]

  Returns a new array from a set of elements.

  @param items — A set of elements to include in the new array object.
*/
console.log(numArr.length, numArr);//4 [ 1, 2, 3, 4 ]
let arrNum1 = [5, 6, 7];
let arrNum2 = [9, 7];
let arrNum3 = [arrNum1, arrNum2];
console.log(arrNum3);//[ [ 5, 6, 7 ], [ 9, 7 ] ]
let arrNum4 = [...arrNum1, ...arrNum2];//[ 5, 6, 7, 9, 7 ]
console.log(arrNum4);
let arNu1 = Array.of(numArr, arrNum1, arrNum2);
console.log(arNu1);//[ [ 1, 2, 3, 4 ], [ 5, 6, 7 ], [ 9, 7 ] ]

let arNu2 = Array.of(...numArr, ...arrNum1, ...arrNum2);
console.log(arNu2);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 9, 7
]
*/

console.log('======================================================================');

let tool = Array.from('Playwright');
console.log(tool);
/*
[
  'P', 'l', 'a', 'y',
  'w', 'r', 'i', 'g',
  'h', 't'
]
*/

//Array.from --> works for string array only
let fool = Array.from(12345);
console.log(fool);//[] --> Gives empty array, so --> Array.from --> works for string array only not for number array
/*
Array.form():
  (method) ArrayConstructor.from<string>(iterable: Iterable<string> | ArrayLike<string>): string[] (+3 overloads)

  Creates an array from an iterable object.

  @param iterable — An iterable object to convert to an array.
*/

let fool1 = Array.from('Selenium');
let fool2 = Array.from('Cypress');
let fool3 = Array.from('Playwright');
let completelyFool = [...fool1, ...fool2, ...fool3];
console.log(completelyFool);
/*
[
  'S', 'e', 'l', 'e', 'n', 'i',
  'u', 'm', 'C', 'y', 'p', 'r',
  'e', 's', 's', 'P', 'l', 'a',
  'y', 'w', 'r', 'i', 'g', 'h',
  't'
]
*/

console.log(Array.of(...fool1, ...fool2, ...fool3));
/*
[
  'S', 'e', 'l', 'e', 'n', 'i',
  'u', 'm', 'C', 'y', 'p', 'r',
  'e', 's', 's', 'P', 'l', 'a',
  'y', 'w', 'r', 'i', 'g', 'h',
  't'
]
*/


//
let ay1 = [10, 20, 30, 40];
let k = ay1.keys();
console.log([...k]);//[ 0, 1, 2, 3 ]
let v = ay1.values();
console.log([...v]);//[ 10, 20, 30, 40 ]

/*
for(let i=0; i<ay1.length; i++){
  for(let j=1; j<ay1.length; j++){
    let c = 0;
    if(ay1[i]==ay1[j]){
      c++;
    };
  }
  console.log(`${ay1[i]}: ${c}`);
}
*/

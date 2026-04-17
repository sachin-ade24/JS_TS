
//import { rest } from './utilsTest.js';
/*
By importing rest from utilsTest.js, we have initiated: circular dependency + temporal dead zone (TDZ).
*/

let name = 'Tom';
let flag = true;

function add(a, b){
    return a + b;
};

/*
console.log(name);//Tom
console.log(add(5, 19));//24
*/

function test(){
    console.log('test() --> method');
};

let user = {
    name: 'Sachin'
};

let subtractTwoNums = (a, b) => console.log(a - b);

//rest();//not allowed--> circular dependency + temporal dead zone (TDZ).

export default function print(){
    console.log('Print something..');
}

export {name, add, test, flag, user, subtractTwoNums};

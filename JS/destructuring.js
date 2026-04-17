//Destructuring:

/*
Destructuring is clean way to extract the values from arrays or objects and assign them to variables in a single line.
*/


//1. Array destructuring:

let [a, b, c] = [10, 20, 30];
console.log(a);//10
console.log(b);//20
console.log(c);//30
console.log(a, b, c);//10 20 30

let arr = [40, 50, 60];
let [x, y, z] = arr;
console.log(x, y, z);//40 50 60

let [p, , r] = arr;
console.log(p, r);//40 60

let ar = [10];
let [a1, b1 = 50] = ar;
console.log(a1, b1);//10, 50

let br = [20, 30];
let [c1, d1 = 50] = br;
console.log(c1);//20
console.log(d1);//30

let num = [1, 2, 3, 4];
let [t1, ...pop] = num;
console.log(t1);//1
console.log(pop);//[2 3 4]


console.log('======================================================================');


//2. Object destructuring:

let user = {
    name: 'Tom',
    age: 30
};

let {name, age} = user;
console.log(name, age);//Tom 30


console.log('======================================================================');


let customer = {
    name: 'Sachin',
    age: 37,
    city: 'Pune',
    zip: 431131
};

function placeOrder({name, city}){
    console.log(name, city);
};

placeOrder(customer);//Sachin Pune


console.log('======================================================================');


function lauchTheBrowser({browserName, headless, url}){
    console.log(browserName, headless, url);
};

let page = { 
    title: 'login',
    browserName: 'chrome',
    url: 'http://www.google.com',
    headless: true,
    footer: [1, 2, 3]
};

lauchTheBrowser(page);//chrome true http://www.google.com

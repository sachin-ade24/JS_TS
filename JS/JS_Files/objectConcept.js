//Object: Key-value Pair
//The data type of Key will always be string

let user = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true,
    address: {
        flat: 101,
        zip: 432121
    }
};

//log the object:
console.log(user);//{ name: 'Tom', age: 30, city: 'LA', isActive: true }

//console.log(typeof(user.age));

//Access the value of a key
console.log(user.name);//Tom
console.log(user.age);//30
console.log(user.telephone);//undefined
console.log(user['city']);//LA
console.log(user['isActive']);//true
console.log(user.address);//{ flat: 101, zip: 43212 }
console.log(user.address.flat);//101
console.log(user.address.zip);//432121
console.log(user['address']);//{ flat: 101, zip: 432121 }
console.log(user.address['flat']);//101

//add new key-value pair
user.email = 'user@user.com';
console.log(user);
/*
{
  name: 'Tom',
  age: 30,
  city: 'LA',
  isActive: true,
  address: { flat: 101, zip: 432121 },
  email: 'user@user.com'
}
*/

//delete the key-value pair
delete user.email;
console.log(user);
/*
{
  name: 'Tom',
  age: 30,
  city: 'LA',
  isActive: true,
  address: { flat: 101, zip: 432121 }
}
*/

//upate value of a key
user.name = 'Tom Automation';
console.log(user.name);//Tom Automation


console.log('======================================================================');

//Traditional for loop:
let keys1 = Object.keys(user);
for(let i=0; i<keys1.length; i++){
    //console.log(`${keys1[i]}: ${user[keys1[i]]}`);
    /*
    name: Tom Automation
    age: 30
    city: LA
    isActive: true
    address: [object Object]
    */
    console.log(keys1[i], ':', user[keys1[i]]);
    /*
    age 30
    city LA
    isActive true
    address { flat: 101, zip: 432121 }
    */
}

console.log('======================================================================');

//
//Iterate over keys:
let keys = Object.keys(user);
for(let key of keys){
    console.log(key);
}

//Iterate over values:
let values = Object.values(user);
for(let value of values){
    console.log(value);
    //console.log(typeof(value));
}
/*
Tom Automation
30
LA
true
{ flat: 101, zip: 432121 }
*/


//Iterate over Object
let pair = Object.entries(user);
for(let [key, value] of pair){
    console.log(`${key}: ${value}`);
}
/*
name: Tom Automation
age: 30
city: LA
isActive: true
address: [object Object]
*/

console.log('======================================================================');

//for..in
for(let key in user){
    console.log(`${key}: ${user[key]}`);
}
/*
name: Tom Automation
age: 30
city: LA
isActive: true
address: [object Object]
*/

console.log('======================================================================');


//for..each
Object.keys(user).forEach(key => {
    console.log(`${key}: ${user[key]}`);
})
/*
name: Tom Automation
age: 30
city: LA
isActive: true
address: [object Object]
*/

console.log();

//better approach:
Object.entries(user).forEach(([key,value])=>{
    console.log(key, value);
})
/*
name Tom Automation
age 30
city LA
isActive true
address { flat: 101, zip: 432121 }
*/

console.log();

Object.values(user).forEach((value)=>{
    console.log(value);
});

console.log();




let userObj = { name: 'Tom', age: 30, city: 'Pune' };
console.log(userObj.name);//Tom
console.log(userObj['age']);//30
let {name, age, city} = userObj;
console.log(name);//Tom
console.log(age);//30
console.log(city);//Pune


const obj = {
    name: "Sachin",
    age: 37,
    address: {
        flat: 302,
        floor: 3,
        plot: 16,
        pin: 123456,
        houseName: "abcd"
    }
};

console.log(obj.name);//Sachin
console.log(obj['name']);//Sachin

const key= 'age';
console.log(obj[key]);//37
console.log(obj.key);//undefined

//1.
Object.entries(obj).forEach(([key, value])=>{
    console.log(key, ': ', value);
});
/*
name :  Sachin
age :  37
address :  { flat: 302, floor: 3, plot: 16, pin: 123456, houseName: 'abcd' }
*/

for(let [key, value] of Object.entries(obj)){
    console.log(`${key}: ${value}`);
};
/*
name: Sachin
age: 37
address: [object Object]
*/

for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
};
/*
name: Sachin
age: 37
address: [object Object]
*/

obj['email'] = 'abcd@dcba.com'
console.log(obj);
/*
{
  name: 'Sachin',
  age: 37,
  address: { flat: 302, floor: 3, plot: 16, pin: 123456, houseName: 'abcd' },
  email: 'abcd@dcba.com'
}
*/

console.log('=====================================================================');

let objectArr = [
  {name: "Prince", age: 4, class: "Nursery"},
  {name: "Samarth", age: 2, class: "Play group"},
  {name: "Sachi", age: 1, class: "Play group"},
  {name: "Advik", age: 4, class: "Nursery"}
];

console.log(objectArr[0]);
for(let obj of objectArr){
    console.log(obj);
}

const f1 = objectArr.filter((obj)=> obj['age'] === 4);
console.log(f1);
/*
[
  { name: 'Prince', age: 4, class: 'Nursery' },
  { name: 'Advik', age: 4, class: 'Nursery' }
]
*/

const f2 = objectArr.filter((obj)=> obj['name'].includes('Sac'));
console.log(f2);
/*
[ { name: 'Sachi', age: 1, class: 'Play group' } ]
*/

objectArr.forEach((obj)=>console.log(obj));
/*
{ name: 'Prince', age: 4, class: 'Nursery' }
{ name: 'Samarth', age: 2, class: 'Play group' }
{ name: 'Sachi', age: 1, class: 'Play group' }
{ name: 'Advik', age: 4, class: 'Nursery' }
*/

objectArr.forEach((obj)=>{
    Object.entries(obj).forEach(([key, value])=>{
        console.log(`${key}: ${value}`);
    })
})
/*
name: Prince
age: 4
class: Nursery
name: Samarth
age: 2
class: Play group
name: Sachi
age: 1
class: Play group
name: Advik
age: 4
class: Nursery
*/


console.log('=====================================================================');

const empData = [
    {name: 'Sachin', age: 37, isActive: false, city: 'Pune', salary: 0},
    {name: 'Suraj', age: 30, isActive: true, city: 'Mumbai', salary: 18},
    {name: 'Kalpana', age: 32, isActive: false, city: 'Pune', salary: 0},
    {name: 'Ravikumar', age: 27, isActive: true, city: 'Pune', salary: 10},
    {name: 'Rahul', age: 28, isActive: true, city: 'Majalgaon', salary: 7}
];

const EmpWithZeroSal = empData.filter((obj)=>obj.salary===0);
console.log(EmpWithZeroSal);
/*
[
  { name: 'Sachin', age: 37, isActive: false, city: 'Pune', salary: 0 },
  {
    name: 'Kalpana',
    age: 32,
    isActive: false,
    city: 'Pune',
    salary: 0
  }
]
*/

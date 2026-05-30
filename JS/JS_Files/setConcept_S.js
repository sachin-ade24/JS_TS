
const s = new Set(['a', 'b', 'c', 'd']);
console.log(s);//Set(4) { 'a', 'b', 'c', 'd' }
console.log(typeof s);//object

/*
add():
    (method) Set<any>.add(value: any): Set<any>
    Appends a new element with a specified value to the end of the Set.
*/
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
console.log(mySet);//Set(4) { 1, 2, 3, 4 }
let mySetArr = [...mySet];
console.log(mySetArr);//[ 1, 2, 3, 4 ]
console.log(mySetArr[mySetArr.length-1]);//4
console.log(mySet.size);//4

console.log('=================================');

for(const i of mySet){
    console.log(i);
}
/*
1
2
3
4
*/

console.log('=================================');

for(const i in [...mySet]){
    console.log([...mySet][i]);
}
/*
1
2
3
4
*/

console.log('=================================');

/*
has():
    (method) Set<any>.has(value: any): boolean
    @returns — a boolean indicating whether an element with the specified value exists in the Set or not.
*/
let flag = mySet.has(4);
console.log(flag);//true
console.log(mySet.has(0));//false

console.log('=================================');

mySet.forEach((e)=>console.log(e));
/*
1
2
3
4
*/

console.log('=================================');

/*
keys():
    (method) Set<any>.keys(): SetIterator<any>
    Despite its name, returns an iterable of the values in the set.
*/
let iterator = mySet.keys();
for(const value of iterator){
    console.log(value);
};
/*
1
2
3
4
*/

console.log('=================================');

/*
values():
    (method) Set<any>.values(): SetIterator<any>
    Returns an iterable of values in the set.
*/
let valuesIterator = mySet.values();
for(const value of valuesIterator){
    console.log(value);
};
/*
1
2
3
4
*/

console.log('=================================');

/*
entries():
    (method) Set<any>.entries(): SetIterator<[any, any]>
    Returns an iterable of [v,v] pairs for every value v in the set.
*/
let valuePairs = mySet.entries();
for(const valuePair of valuePairs){
    console.log(valuePair);
};
/*
[ 1, 1 ]
[ 2, 2 ]
[ 3, 3 ]
[ 4, 4 ]
*/

console.log('=================================');

/*
clear():
    (method) Set<string>.clear(): void
    Removes all elements from the Set.
*/
s.clear();
console.log(s);//Set(0) {}

console.log('=================================');

/*
delete():
    (method) Set<number>.delete(value: number): boolean
    Removes a specified value from the Set.

    @returns — Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
*/
let newSet=  new Set([10, 20, 30, 40, 50]);
let isDeleted = newSet.delete(50);
console.log(isDeleted);//true
console.log(newSet.delete(60));//false

for(let [k, v] of newSet.entries()){
    console.log(`${k}: ${v}`);
};

let ns = new Set(["Aa", "Bb", "Cc", "Dd", "Ee"]);
for(let [k,v] of ns.entries()){
    console.log(`${k}: ${v}`);
}


const setS1 = new Set(Array.of(10, 4, 7, 5, 2, 10, 2));
console.log(setS1);

const s1Arr = [...setS1];
console.log(s1Arr); 

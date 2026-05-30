
const arr = [1, 2, 1, 3, 5, 4, 5];
const s1 = new Set(arr);

console.log(arr);//[1, 2, 1, 3, 5, 4, 5]
console.log(s1);//Set(5) { 1, 2, 3, 5, 4 }
console.log(...s1);//1 2 3 5 4
console.log([...s1]);//[ 1, 2, 3, 5, 4 ]

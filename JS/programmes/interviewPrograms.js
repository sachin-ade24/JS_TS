
//1.
let A= [6,2,4,0,0,0,0]
let B= [3,1,5]
//Output = [1,2,3,4,5,6]

let newArr = A.filter((e)=>e!=0);
console.log(newArr);
let C = [...B, ...newArr];
console.log(C);
console.log(C.sort());

console.log('================================================================================================================');

//2. keep even at left side and odd at right side 
let arr = [12, 9, 13, 90, 34, 8, 15];
let ar = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        ar.push(arr[i]);
    }
}
for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        ar.push(arr[i]);
    }
}
console.log(ar);
/*
[
  12, 90, 34, 8,
   9, 13, 15
]
*/

console.log('================================================================================================================');

//3.
/*
Extract Numbers: Separate digits from alphanumeric strings (e.g., converting "45Sur343esh5678" into numbers)
*/

let str = '45Sur343esh5678';

let s1 = str.match(/\d/g);
console.log(s1);
console.log(s1.map(Number));

let s2 = str.match(/\d+/g);
console.log(s2);
console.log(s2.map(Number));

let s3 = str.match(/[a-zA-Z]+/g);
console.log(s3);
console.log(s3.map(Number));

let s4 = str.match(/[a-zA-Z]/g);
console.log(s4);
console.log(s4.map(String));

let str1 = '45Sur343etruesh5678';
let st1 = str1.match(/true/g)[0];
console.log(st1);//true

console.log('================================================================================================================');

/*
Longest Substring Without Repeating Characters , abcabcbb
*/

let str = 'abcabcbb';

let longest = '';

for (let i = 0; i < str.length; i++) {
    let current = '';

    for (let j = i; j < str.length; j++) {
        if (current.includes(str[j])) {
            break;
        }

        current += str[j];

        if (current.length > longest.length) {
            longest = current;
        }
    }
}

console.log(longest);        // abc
console.log(longest.length); // 3

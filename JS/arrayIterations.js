//1.
//Index based for loop
let num = [10, 20, 30, 40];
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

console.log('======================================================================');

//2.
//for..of loop
for(let e of num){
    console.log(e);
}

console.log('======================================================================');

//3.
//for..in loop --> meaning for..index loop --> in is for index
for(let k in num){
    console.log(`The number present at index ${k}: ${num[k]}`);
}

console.log('======================================================================');

let empData =['Sachin Ade', 37, 'QA', 'Synechron', 10, true];
for(let data of empData){
    console.log(data);
    if(data==='QA'){
        console.log('10% hike..');
        break;
    }
}

console.log('======================================================================');

//Reverse loop
for(let i=empData.length-1; i>=0; i--){
    console.log(empData[i]);
}

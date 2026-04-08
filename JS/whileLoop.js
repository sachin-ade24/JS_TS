/*while loop*/
//log 1 to 10
let n = 1;
while(n<=10){
    console.log(n);
    n++;
}
console.log(n);//Latest value of n = 11

console.log('=====================================================================================');

//infinirte loop:
/*
while(true){
    console.log("Welcome..");
}
*/

//correct above loop:
while(true){
    console.log("Welcome..");
    break;
}

console.log('======================================================================================');

//if condition within while
let j = 1;
while(j<=50){
    console.log(j);
    if(j%5==0){
        console.log('Hello..');
    }
    j++;
}
console.log(j);

//
//if condition with break within while
j = 1;
while(j<=50){
    console.log(j);
    if(j%5==0){
        console.log('Hello..');
        break;
    }
    j++;
}
console.log(j);

//Negative while loop
let i = 10;
while(i>=1){
    console.log(i);
    i--;
}

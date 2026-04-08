/*for loop*/
//log 1 to 10
for(i=1; i<11; i++){
    console.log(i);
}

//log 10 to 1
for(let i=10; i>0; i--){
    console.log(i);
}

//Simple Interview trick quentions
//1.
let a=1;
for( ; a<11; a++){
    console.log(a);
} //--> Valid

//2.
let b=1;
for( ; b<11; ){
    console.log(b);
    b++;
} //--> Valid

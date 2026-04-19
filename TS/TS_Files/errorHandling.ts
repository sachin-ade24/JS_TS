//error handling:

function divisionFun(a: number, b: number): number{
    if(b === 0){
        throw new Error("Cannot be divided by 0");
    }
    return a/b;
};

let d1 = divisionFun(20, 10);
console.log(d1);//2

/*
let d2 = divisionFun(10, 0);
console.log(d2);//Error: Cannot be divided by 0
*/

//e.g. a function converts json to JS object:
function parsing(data: string): void{
    try{
        let result = JSON.parse(data);
        console.log(result);
    } catch(error){
        console.log(error);
    } finally{
        console.log('Close the DB connection');
    } 
    //finally block is not mandatory. where as it is recommended always to write catch to handle error properly.
};

//parsing('Hi json..');//SyntaxError: Unexpected token 'H', "Hi json" is not valid JSON
parsing('{"name": "Sachin"}');//{ name: 'Sachin' }
console.log('Done..');//Done..

//
function m1(): never{
    throw new Error('Some error..');
};
m1();//Error: Some error..

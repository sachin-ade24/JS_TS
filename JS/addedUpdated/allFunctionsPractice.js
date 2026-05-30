
const add = (a, b) => {return a+b};
const sub = (a, b) => {return a-b};
const div = (a, b) => {return a/b};
const mul = (a, b) => {return a*b};

function mathsOperations(q, w, callback){
    return callback(q, w);
}

console.log(mathsOperations(25, 20, add));

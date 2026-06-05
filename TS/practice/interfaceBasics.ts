
interface User {
    id: number;
    name: string;
    email: string;
    address?: {
        city: string;
        pin: number;
        state?: string;
    }
};

const user: User = {
    id: 1,
    name: "Sachin",
    email: "sachin@test.com"
};


interface Calculator {
    add(a: number, b:number): number;
    sub(a: number, b:number): number;
    mult(a: number, b:number): number;
    div(a: number, b:number): number;
};

const calc: Calculator = {
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    mult(a, b){
        return a * b;
    },
    div(a, b){
        return a/b;
    }
};

console.log(calc.add(5, 10));

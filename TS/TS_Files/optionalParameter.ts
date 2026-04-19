//Optional param:

function printData(name: string, age?: number): void{
    console.log(name);
    console.log(age);
};
printData('Sachin');
/*
Sachin
undefined
*/
printData('Sachin', 37);
/*
Sachin
37
*/

function launchBrowser(browser: string, headless?: boolean): boolean{
    if(headless){
        console.log(`Run test cases in the ${browser} with headless mode.`);
        return true;
    } else{
        console.log(`Run test cases in the ${browser} with headed mode.`);
        return false;
    }
};

let isBrowserLaunched = launchBrowser('chrome');
console.log(isBrowserLaunched);
/*
Run test cases in the chrome with headed mode.
false
*/

isBrowserLaunched = launchBrowser('chrome', false);
console.log(isBrowserLaunched);
/*
Run test cases in the chrome with headed mode.
false
*/

isBrowserLaunched = launchBrowser('chrome', true);
console.log(isBrowserLaunched);
/*
Run test cases in the chrome with headless mode.
true
*/

function search(product: string, color: string, price?: number, seller?: string): void{
    if(price && seller){
        console.log(`Perform search by using: ${product}, ${color}, ${price} and ${seller}`);
    } else{
        console.log(`Perform search by using: ${product} and ${color}`);
    }
};
search('Samsung', 'black');
//Perform search by using: Samsung and black
search('Tab', 'Grey', 10000, 'New seller');
//Perform search by using: Tab, Grey, 10000 and New seller

//Function overload can be achieved by using TS (though overloading feature is not available in JS)

//Design a prototype --> proto + type: signature for the function
function combination(a: number, b: number): number;
function combination(a: string, b: number): string;
function combination(a: string, b: string): string;
function combination(a: number, b: string): string;

function combination(a: any, b: any): any{
    return a+b;
};

let comb1 = combination(10, 39);
console.log(comb1);

let comb2 = combination('Sachin', 24);
console.log(comb2);

let comb3 = combination('Sachin', 'Ade');
console.log(comb3);

let comb4 = combination(24, 'Sachin');
console.log(comb4);

export{};//--> This tells TS that: This file is a module, not a global script.

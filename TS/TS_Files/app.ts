//TS --> define types with your variables, functions etc.

let message: string = 'Hello TS';
console.log(message);//Hello TS

let x: number = 100;
console.log(x);//100

function testing(browser: string): string{
    return browser.toLowerCase();
}
let result: string = testing('CHROME');
console.log(result);//chrome

export {};//--> This tells TS that: This file is a module, not a global script.

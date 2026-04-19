
//Simple functions:
function launchBrowser(browserName: string): boolean{
    switch(browserName.trim().toLowerCase()){
        case 'chrome':
            console.log('Chrome is launched');
            return true;
        case 'edge':
            console.log('Edge is launched');
            return true;
        default:
            console.log('Invalid browser. Please pass a right browser');
            return false;
    };
};

let isLaunched = launchBrowser('chrome');
console.log(isLaunched);
/*
Chrome is launched
true
*/


console.log('======================================================================');


//Functions with promises:
//1.
function getNumber(): Promise<number>{
    return Promise.resolve(100);
};
getNumber().then((result) => console.log(result));//100

//2.
function getTrainerName(): Promise<string>{
    return Promise.resolve('Sachin');
};
getTrainerName().then((result)=>console.log(result));//Sachin

//3.
function getUserData(): Promise<{name: string, age: number}>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let user = {
                name: 'Sachin',
                age: 37
            };
            resolve(user);
        }, 3000);
    });
};
getUserData().then((result)=>console.log(result));//{ name: 'Sachin', age: 37 }

//4.
type userInfoType = {name: string, id: number, city: string, pin: number};
function getUserInfo(): Promise<userInfoType>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let userInfo = {
                name: 'Sachin',
                id: 12345,
                city: 'Pune',
                pin: 234517
            };
            resolve(userInfo);
        }, 3100);
    });
};
getUserInfo().then((userInformation)=>console.log(userInformation));
/*
{ name: 'Sachin', id: 12345, city: 'Pune', pin: 234517 }
*/

//5.
//async..await:
async function getMyUserInfo(): Promise<userInfoType>{
    let myUser = await getUserInfo();
    return myUser;
};

async function finalInfo(): Promise<void>{
    let info = await getMyUserInfo();
    console.log(info);
};
finalInfo();//{ name: 'Sachin', id: 12345, city: 'Pune', pin: 234517 }

//6.
function click(element: string): Promise<void>{
    console.log(`Click on '${element}'`);
    return Promise.resolve();
};

//Generic util/function:
async function doClick(element: string){
    await click(element);
};

doClick('//div');//Click on '//div'

export {};//--> This tells TS that: This file is a module, not a global script.

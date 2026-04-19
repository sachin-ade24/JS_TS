//Primitive data types

let num: number = 100;
console.log(typeof num);//number
console.log(num);//100

let usename: string = 'QA';
console.log(usename);//QA

let isActive: boolean = true;
console.log(typeof isActive);
console.log(isActive);//true
isActive = false;
console.log(isActive);//false

let user: null = null;
console.log(typeof user);//object
console.log(user);//null

let x: undefined = undefined;
console.log(typeof x);//undefined
console.log(x);//undefined

let distance: bigint = 100n;
console.log(typeof distance);//bigint
console.log(distance);//100n
console.log(distance + 10n);//110n (distance + 10 --> 10 is not allowed, you must have to write 10n)

//So, can we change the data type of the given variable in TS (We can do this in JS)
//For this we have to define the type of the variable as 'any'
let testValue: any = 100;
console.log(typeof testValue);//number
testValue = "Sachin";
console.log(typeof testValue);//string
testValue = true;
console.log(typeof testValue);//boolean

let value: unknown = "Hello";
console.log(typeof value);
console.log(value);

function testing(): void{
    console.log('Hello testing.');
};
testing();

function getMarks(studentName: string, marks: number): void{
    console.log(studentName, marks);
};
getMarks('Sachin', 100);//Sachin 100

//never: a value which will never occur i.e. will never happen.
function throwElementError(locator: string): never{
    throw new Error(`${locator} not found.`);
};

//throwElementError('loginBtn');//Error: loginBtn is not found.

function throwEnvNotFoundError(envName: string): never{
    throw new Error(`Invalid environment: ${envName}`);
}

//throwEnvNotFoundError('UAT');//Error: Invalid environment: UAT


//Union type:
let id: string | number;
id = "12345";//valid
console.log(id);
id = 12345;//valid
console.log(id);
//id = true;//invalid

let address: string | number | boolean;
address = "12 Pune";//valid
address = 1279;//valid
address = true;//valid

//arrays:
let marks: number[] = [10, 20, 30, 40];
console.log(marks);
console.log(marks.length);

let devices: string[] = ['Macbook', 'Samsung Galaxy Tab', 'Dell Inspiron'];
console.log(devices);

let names: Array<string> = ["Sachin", "Suraj", "Sarika", "Supriya"];
console.log(names);

let salary: Array<number> = [100, 200, 300, 400];
console.log(salary);

let bill: Array<string | number> = ["$200", 500, "INR 100", 400];
console.log(bill);


//tuple: fixed length array with specific type
let userDetails: [string, number];
userDetails = ["Sachin", 12345679];
console.log(userDetails.length);//2
console.log(userDetails);

let details: [string | number, number | boolean, object | number];
details = [100, 400, 500];
console.log(details);
console.log(details.length);

let person: [string, string, number, boolean] = ["Sachin", "Ade", 20, true];
console.log(person);
console.log(person.length);


//object:
let myUser: object = {
    name: "Sachin",
    salary: 20,
    isActive: true,
    city: "Pune"
};
console.log(myUser);

//Better approach:
let myNewUser: {name: string, salary: number, isActive: boolean, city: string} = {
    name: "Kalpana",
    salary: 10,
    isActive: true,
    city: "Majalgaon"
}
console.log(myNewUser);


//custom type forthe object: using type alias:

type userType = {name: string, salary: number, isActive: boolean, city: string};
let userInfo: userType = {
    name: "Prince",
    salary: 15,
    isActive: true,
    city: "Bangalore"
};
console.log(userInfo);

type employeeType = {readonly name: string, city: string, pincode: number, education: string, readonly empId: number};
let newEmployee: employeeType = {
    name: "Sachin",
    city: "Majalgaon",
    pincode: 431131,
    education: "M.Tech",
    empId: 12345
}
//newEmployee.name = "Prince";//invalid --> Cannot assign to 'name' because it is a read-only property.


//type for variables:
type orderIdType = string | number;
let orderId: orderIdType = 1234;
orderId = '1234';

type statusCodeType = string | number;
let okStatusCode: statusCodeType = 200;
okStatusCode = "200 OK";

export {};//--> This tells TS that: This file is a module, not a global script.

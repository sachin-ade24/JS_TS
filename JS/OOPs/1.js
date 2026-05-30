
/*
What is OOP?

OOP is a programming style where we organize code using objects.

Real-life example:--> Car

    A car has:

        Properties (Data):
            color
            brand
            model

        Behaviors (Methods):
            start()
            stop()
            accelerate()

*/

const car = {
    brand: "TATA",
    color: "Black",
    model: "Safari",

    start(){
        console.log('Car Started', this.brand, this.model);
    },

    stop(){
        console.log('Car stopped', this.brand, this.model);
    },

    speed(){
        console.log('Increase speed', this.brand, this.model);
    }
};

console.log(car['brand']);//TATA
car.start();//Car Started TATA Safari
car.speed();//Increase speed TATA Safari
car.stop();//Car stopped TATA Safari


console.log('=======================================================================================');


const employee1 = {
    name: "Sachin",
    role: "QA Engineer",
    salary: 100000
};
console.log(employee1.name);
console.log(employee1['role']);


console.log('=======================================================================================');


/*
Methods in Objects

Functions inside objects are called methods.
*/

const employee2 = {
    name: "Mona Lana",

    work(){
        console.log('Testing web application...');
    }
};
employee2.work();//Testing web application...


console.log('=======================================================================================');


//Create multiple employees:

function newEmployee(name, id, city, flag){
    const newEmployee = {
        empName: name,
        empID: id,
        empCity: city,
        isActive: flag
    };
    return newEmployee;
};

function createEmployee(name, id, city, flag, callback){
    return callback(name, id, city, flag, callback);
};
const sachin123 = createEmployee('Sachin', 123, 'Pune', true, newEmployee);
console.log(sachin123);
/*
{ empName: 'Sachin', empID: 123, empCity: 'Pune', isActive: true }
*/


console.log('=======================================================================================');


//Another way: use 'class'
/*
Class is a blueprint.

    class Employee{

    }

Think of it like a template.

Actual objects are created from the template.
*/

/*
constructor:
Constructor initializes data.
*/
class Employee{

    constructor(name, role){
        this.name = name;
        this.role = role;
    };

    getWork(){
        console.log(`${this.name} is testing ${this.role} application.`);
    };

    getRole(){
        console.log(`${this.name} is ${this.role}.`);
    };

};

const emp1 = new Employee('Sona Lana', 'Tester');
console.log(emp1);
/*
Employee { name: 'Sona Lana', role: 'Tester' }
*/

console.log(emp1.name);//Sona Lana
console.log(emp1.role);//Admin
emp1.getWork();//Sona Lana is testing Tester application.
emp1.getRole();//Sona Lana is Tester.


const emp2 = new Employee('Mona Sona Lana', 'Admin');
emp2.getWork();//Mona Sona Lana is testing Admin application.
emp2.getRole();//Mona Sona Lana is Admin.


console.log('=======================================================================================');


/*
What is Encapsulation?

Wrapping data and methods together.
*/
class Bank{

    constructor(balance){
        this.balance = balance;
    };

    deposit(amount){
        this.balance += amount;
    };

};

const transaction = new Bank(1000);
console.log(transaction);
/*
Bank { balance: 1000 }
*/

transaction.deposit(1000);
console.log(transaction);
/*
Bank { balance: 2000 }
*/


console.log('=======================================================================================');


/*
Private Fields

Modern JS supports private properties.
*/
class BankAccount{

    #balance;

    constructor(balance){
        this.#balance = balance;
    };

    deposit(amount){
        this.#balance += amount;
    };

    getBalance(){
        return this.#balance;
    };

};

const account = new BankAccount(1000);
console.log(account);//BankAccount {}
account.deposit(4000);
console.log(account);//BankAccount {}
console.log(account.getBalance());//5000

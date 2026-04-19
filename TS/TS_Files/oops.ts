
//Inheritance:

class Car{
    start(){
        console.log('Car -- start');
    };

    stop(){
        console.log('Car -- stop');
    };

    refuel(){
        console.log('Car -- refuel');
    };
};

class BMW extends Car{
    override start(){
        console.log('BMW -- start');
    };//For the method overriden from parent, we have to write override before overrien metho's name.

    autoParking(){
        console.log('BMW -- autoParking');
    };
};

let bmw: BMW = new BMW();
bmw.start();
bmw.stop();
bmw.autoParking();

let car: Car = new Car();
car.start();

console.log('======================================================================');

//Top casting: is-a-relationship justified -- passed for top casting
/*
Top casting: Child class object can be referred  by parent class reference variable.
Top casting is allowed in TS.
*/
let newBmw: Car = new BMW();
/*
This way we cannot access the child class's own method
*/
newBmw.start();//BMW -- start
newBmw.stop();//Car -- stop
newBmw.refuel();//Car -- refuel
//newBmw.autoParking();//not allowed

console.log('======================================================================');

//Downcasting: is-a-relationship not justified -- passed for top casting
/*
Downcasting is not allowed in TS
Parent class object can be referred by child class reference variable
*/
//let newCar: BMW = new Car();//not allowed

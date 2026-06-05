
class Animal{

    eat(){
        console.log('Eating..');
    };

};

class Dog extends Animal{

    numOfLegs = 4;
    legs(){
        console.log(`Dog has ${this.numOfLegs} legs.`);
    };

};
const dog1 = new Dog();
dog1.numOfLegs = 5;
console.log(dog1.numOfLegs);//5
dog1.eat();//Eating..
dog1.legs();//Dog has 5 legs.

console.log('===============================================================================================================');

//Constructor inheritance:

class Animal1{

    constructor(name){
        this.name=name;
    };

};

class Dog1 extends Animal1{

    constructor(name){
        super(name);
    };

};
const d1 = new Dog1('Sheru');
console.log(d1);//Dog1 { name: 'Sheru' }

console.log('===============================================================================================================');

//Method Overriding:

class Animal2{

    sound(){
        console.log("Animal Sound");
    };

};

class Dog2 extends Animal2{

    sound(){
        console.log("Bark");
    };

};
const d2 = new Dog2();
d2.sound();//Bark

console.log('===============================================================================================================');

//Polymorphism:

class Cat{

    sound(){
        console.log("Meow");
    };

};
const animalSounds = [new Dog2, new Cat];
animalSounds.forEach((a)=>a.sound());

console.log('===============================================================================================================');



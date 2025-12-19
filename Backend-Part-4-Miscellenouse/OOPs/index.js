// let arr1 = [2, 3, 4, 5, 12, 45];
// let arr2 = [2, 3, 4, 5, 12, 45];
// arr1.sayhello = ()=>{
//     console.log("Hello I am say hello function");
// }

// arr2.sayhello = ()=>{
//     console.log("Hello I am say hello function");
// }


// // Both methods are same but they are not giving the true output becouse both are functions are taking the indivisual space for storing the function.
// console.log(arr1 === arr2);


// //factory functions ; 
// function students(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk (){
//             console.log(` I can talk, and my name is ${this.name}`);
//         }
//     }

//     return person;
// }


// //New Operator - It is also called the constructors. we define the constructor functions with capital letter and it does not returns anything.
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hello my name is : ${this.name}`);
// }

// const p1 = new Person ("Samay", 24);
// const p2 = new Person ("Anuj", 24);
// console.log(p1);
// console.log(p2);

// console.log(p1.talk());


// //Classes - We use the constructor method for class for creating and initializing the object

// class Person{
//     constructor (name, age) {
//         this.age = age;
//         this.name = name;
//     }

//     talk(){
//         console.log(`Hello! my name is : ${this.name} and my age is : ${this.age} `)
//     }

// }

// let p1 = new Person ("Anshu", 21);
// let p2 = new Person ("Durga", 24);

// console.log(p1);
// console.log(p1.talk());
// console.log(p2);
// console.log(p2.talk());

// //Inheritence - it is a machanism that allows to create new classes on the basic of already existing classes.
// class Person {
//     constructor(name, age) {
//         console.log("Parent class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Here I am ! My name is : ${this.name}`);
//     }
// }

// class Students extends Person{
//     constructor(name, age, marks) {
//         console.log("Student class constructor");
//         super(name, age);
//         this.marks = marks;
//     }
// }
// class Teacher extends Person{
//     constructor(name, age, subject) {
//         console.log("Student class constructor");
//         super(name, age);
//         this.subject = subject;
//     }
// }

// let p1 = new Students("Harsh", 21, 94);
// console.log(p1);
// console.log(p1.talk());

// let t1 = new Teacher("Rashmi", 21, "Physics");
// console.log(t1);
// console.log(t1.talk());

//Another example of Inheritence -
class Mammel {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("Yes I can eat");
    }
}

class Dog extends Mammel {
    constructor(name) {
        super(name);
    }

    eat() {  // we can override the function, but the applyiing function will be child not parent.
        console.log("I can eat");
    }

    bark() {
        console.log("I am dog")
    }
}

class Cat extends Mammel {
    constructor(name) {
        super(name);
    }

    meow(){
        console.log("I am Cat");
    }
}


let cat1  = new Cat ("Missi");
console.log(cat1);
console.log(cat1.eat())
console.log(cat1.meow())

let dog1  = new Dog ("Tommy");
console.log(dog1);
console.log(dog1.eat())
console.log(dog1.bark())
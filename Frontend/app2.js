// let arr = [1,2,3];
// let arr2 = [1,2,3,4];

// arr.sayHello = () => {
// console.log("Hello, i am arr");
// }

// arr2.sayHello = () => {
// console.log("Hello, i am arr");
// }

// function PersonMaker(name,age){
//     const Person={
//         name:name,
//         age:age,
//         talk() {
//           console.log(`Hi, my name is ${this.name}.`);
//         },
//     };

//     return Person;
// }

// let p1 = PersonMaker("param",25);
// let p2 = PersonMaker("eve",25);

// constructors - this doesn't return anything and start with capital letters


// function Person(name,age){
//         this.name=name;
//         this.age=age;
// }

   
// Person.prototype.talk = function() {
//           console.log(`Hi, my name is ${this.name}.`);
//         };

// let p1 = new Person("param",25);
// let p2 = new Person("eve",25);

// function Cars(name,rpm){
//       this.name =  name ;
//         this.rpm = rpm ;
// }

// Cars.prototype.sound = () => {
//         console.log("I go rrrrrrrrrrrrr");

// }

// let c1 =new Cars("maruti",1250);
// let c2 =new Cars("Bugati",6500);

class Person{
        constructor(name,age){
                this.name = name;
                this.age = age;
        }
        talk() {
                console.log(`Hi my name is ${this.name}`);
        }
}

let p1  = new Person("adam",34);
let p2 = new Person("eve",44);

class Student extends Person {
  constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
  }

  greet() {
        return "hello";
  }
}

let s1 = new Student("Param", 25,78);
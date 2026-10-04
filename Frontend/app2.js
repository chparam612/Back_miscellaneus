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


function Person(name,age){
        this.name=name;
        this.age=age;
}

   
Person.prototype.talk = function() {
          console.log(`Hi, my name is ${this.name}.`);
        };

let p1 = new Person("param",25);
let p2 = new Person("eve",25);
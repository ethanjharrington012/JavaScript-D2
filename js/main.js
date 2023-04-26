// Switch Case

let day = new Date().getDay();
console.log(day)

let literalDay = new Date().toString();
console.log(literalDay)

// Switch Case Syntax
switch (day) {
    case 0:
        console.log("Sleep in have a nice Time its Sunday")
        break;

    case 1:
        console.log("Booo its Monday")
        break;

    case 2:
        console.log("Taco Tuisday")
        break;

    case 3:
        console.log("Its Wensday")
        break;

    case 4:
        console.log("Its Thursday")
        break;

    case 5:
        console.log("Its freaky friday")
        break;

    case 6:
        console.log("Beautifil Saterday")
        break;

    default:
        console.log("Not a day")
        break;
}

// Literal day from date string
switch(literalDay.split(" ")[0]) {
    case 'Sun':
        console.log("Its Sunday Lets Hike")
        break;
    
    case 'Mon':
        console.log("Its Monday workout")
        break;
    
    case 'Tue':
        console.log("Its Tuisday eat tacos")
        break;
    case 'Wed':
        console.log("Its Wensday Hump Day")
        break;

    case 'Thurs':
        console.log("Its Sunday Lets Hike")
        break;

    case 'Fri':
        console.log("Party On Friday")
        break;

    case 'Sat':
        console.log("Sat Get coffee")
        break;
    default:
        console.log("Not a real day you silly goose")
        break;

}

// Creating Objects in JavaScript

let person = {
    name: 'Bill',
    age: 20,
    favColor: 'Red'
};

console.log(person['favColor'])

console.log(person.age)

let person2 = {
    name: 'Max',
    age: 37,
    progLanguage: ['JavaScript', 'Python', 'C++'],
    favColor: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Philly Eagles',
            hockey: 'Penguins',
            basketball: ['Chicago Bulls', 'Houston Rockets'],
            soccer: ['Richmond', 'DC United', 'Real Madrid']
        },
        {
            baseball: 'New York Yankies',
            football: 'Green day pckers',
            basketball: 'Philly 76ers',
            soccer: 'Chelsea'
        }
    ]
}
// array keys
console.log(Object.keys(person2))

// /array of object vallues
console.log(Object.values(person2))


// Bad way of looping through an object
for (let i = 0; i < person2.length; i++) {
    console.log(person2[1])
}

// good way of doing object looping
for (let i = 0; i < Object.keys(person2).length; i++) {
    console.log(Object.keys(person2)[i])
}
// looping through values()
for (let i = 0; i < Object.values(person2).length; i++) {
    console.log(Object.values(person2)[i])
}

// different way of looping through keys()

for (let i in Object.keys(person2)) {
    console.log(Object.keys(person2)[i])
}



console.log(Object.values(person2))

// List of Values() in an object
// checking if value is an array
for (let i in Object.values(person2)) {
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}


// looping through values and printing nested array otherwise printintg our value()

for (let i in Object.values(person2)){
    if(Array.isArray(Object.values(person2)[i])){
        for(let j in Object.values(person2)[i]){
            console.log(Object.values(person2)[i][j])
        }
    }
    else{
        console.log(Object.values(person2)[i])
    }
}



for (let [key,value] of Object.entries(person2)) {
    if (Array.isArray(value)) {
        console.log(`${key}:`);
        value.forEach(value => console.log(value));

    }else {
    console.log(`${key}: ${value}`);
    }
}

Object.keys(person2).forEach(key => console.log(key))


// Creating Object Prototype -- within ESS method syntax
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // method inside of object prototype
    this.printinfo = function(wheels = 0) {
        console.log(`This is a ${this.year} ${this.make} ${this.model} and has ${this.wheels} wheels`)
        return "Dope Car, Bru"
    }
}

// creating instance of our object prototype
let myCar = new Car('Mazda', 'Mazda 3', 2015)

// call prototype method
myCar.printinfo(4)

class Human {
    constructor(name, age, hobby) {
        this.age = age,
        this.name = name,
        this.hobby = hobby
    }
    printInfo = () => {
        return `Name : ${this.name} \nAge: ${this.age} \nHobby: ${this.hobby}`
    }
}

let link = new Human('Link', 118, 'Fishing n stuff')

console.log(link.printInfo())

// Pay attention to the NEW keyword

let Ethan = new Human('Ethan', 21, 'Music n stuff')

console.log(Ethan.printInfo())


// Using Extends

class Baby extends Human {
    constructor(name, age, hobby, walking) {
        super(name, age, hobby)
        this.walking = walking  // BOOL
    }

    isBabyWalking = () => {
        if (this.walking == true) {
            return `oh dang ${this.name} is walking`
        } else {
            return `${this.name} is not walking`
        }
    }
}

// create an instance of the baby
let theChild = new Baby('Lil Johny', 1, 'Pooping pants and crawling', true)
console.log(theChild.printInfo())
console.log(theChild.isBabyWalking())


// --JavaScript Closure-- //
/**
 * 
 * A closure is a self-invoking function that only runs once.
 * it can then set a variable(which in our case will be a counter) and 
 * returns a function expression
 * 
 * For the example below, we will add to a number after the 
 * initial call to the closure has been made 
 * 
 * JavaScrupt Closures are another tupe of variable that can be created
 */


let countUp = (function() {
    let counter = 0 //provide Variable
    console.log('Hit')
    return function () {return counter ++}
})()


let addNames = (function () {
    let names = [];
    console.log('Adding names')
    return function (name) {
        console.log(names)
        return names.push(name)
    }
})()

// -- JavaScript Callbacks -- //

/**
 * 
 * A callback is a function that is to be executed after another function
 * has finished its execution -- hence the name callback
 * 
 * In JavaScript, functions are objects. Because of this, functions can take
 * other functions as arguments(parameters and can return functions by
 * other functions
 * 
 * Functions that do this are called "higher-order functions". Any function
 * that is passed as an argument is called a "Callback Function"
 * 
 * POR QUE?
 * 
 * Porque of the JavaScript Event Loop. In a nutshell, Javascript is
 * an event driven language which means instead of waiting for a response
 * Javascript will keep executing while listening for the other events
 * 
 */

function first() {
    console.log(1)
}

function second() {
    console.log(2)
}


// second()
// first()

// what happend when we add a delay to the first function
function firstDelay(){
    // simulate delay
    setTimeout(function () {
        console.log(1)
    }, 2000)
}

function secondDelay(){
    console.log(2)
}

firstDelay()

secondDelay()


// callback function sytax

function doHomework(subject, callback) {
    alert(`Starting my ${subject} Homework`)
    callback()
}

// doHomework('JavaScript', function() {
//     console.log('Done with Homework')
// })

/*
Though callbacks give us more functionaloty...they also introduce their own 
problem......Callback Hell

Something that looks like this:
function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
})

*/

// We solve this problem with promises
const isEvenNumber = (num) => {
    return new Promise((reslove, reject) => {
        if (num %2==0){
            reslove(num)
        } else {
            reject(num)
        }
    })
}

isEvenNumber(10)
// happy resloved path
    .then((result) => {
        console.log(`Even Number, Great Job ${result}`)
    })
    .catch((error) => {
        console.log(`boo odd number ${error}`)
    })

// another example of promises with Async/Await
// helper function for Async/Await
function slowAddition(n1, n2) {
    return new Promise((reslove) => {
        setTimeout(() => {reslove(n1+ n2)}, 3000)
    })
}
function increaseSalary(base, increase) {
    const newSalary = slowAddition(base, increase);
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

// asynchronos function
async function asyncSalary(base, increase){
    const newSalary = await slowAddition(base, increase);
    console.log(`The new salary is: ${newSalary}`)
    return newSalary
}
asyncSalary(50000, 15000)

// Homework bellow

// CODEWAR PROBLEM:

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

function numberToString(num) {
    // Return a string of the number here!
    return String(num)
  }
//   Complete the solution so that it reverses the string passed into it.

//   'world'  =>  'dlrow'
//   'word'   =>  'drow'


function solution(str){
    const arrayStrings = str.split("");
   
    const reverseArray = arrayStrings.reverse();
 
    const joinArray = reverseArray.join("");
    
    return joinArray;
}


// other problems vv
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function personDish(person) {
    for (let [key,value] of Object.entries(person3)) {
        if (Array.isArray(value)) {
            console.log(`${key}:`);
            value.forEach(value => console.log(value));

        }else {
        console.log(`${key}: ${value}`);
        }
    }
}
personDish(person3)

// Person prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Print info method
  Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  

  Person.prototype.addAge = (years) => {
    this.age += years;
  };
  
  
const person4 = new Person("Alice", 25);
const person5 = new Person("Bob", 30);
  
person4.printInfo();
person5.printInfo();
 
person4.addAge(3);

person4.printInfo();
person5.printInfo();
  

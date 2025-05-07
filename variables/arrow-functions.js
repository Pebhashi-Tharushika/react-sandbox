function printName(name) {
    console.log('Hello ' + name + '!');
}

printName('Kamal'); // Hello Kamal!



function greet(name) {
    return 'Hello ' + name + '!';
}

console.log(greet('Amal')); // Hello Amal!




/* =========== Arrow function =========== */

// remove 'function' keyword
// remove 'return' keyword

/* The arrow function syntax is a shorter way to write function expressions */
const greetArrow = (name) => {
    let greet = 'Hello ' + name + '!';
    return greet;
}
console.log(greetArrow('Nimal')); // Hello Nimal!



/* =========== Arrow function with implicit return ========== */
/*If the function body has only one expression, you can omit the braces and the return statement*/
const greetArrow2 = name => 'Hello ' + name + '!';
console.log(greetArrow2('Wimal')); // Hello Wimal!




/* =========== Arrow function with no parameters ========== */
const greetArrow3 = () => 'Hello World!';
console.log(greetArrow3()); // Hello World!



/* =========== Arrow function with multiple parameters ========== */
const add2 = (a, b) => a + b;
console.log(add2(5, 21)); // 26



/* =========== Arrow function with default parameters ========== */ 
const add3 = (a, b = 0) => a + b;
console.log(add3(5)); // 5
console.log(add3(5, 1)); // 6


/* =========== Arrow function with rest parameters ========== */
const add4 = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(add4(1, 2, 3, 4, 5)); // 15
console.log(add4(1, 2)); // 3



/* =========== Arrow function with destructuring ========== */

const add5 = ({ a, b }) => a + b; // object destructuring

const obj = { a: 5, b: 7 };
console.log(add5(obj)); // 12



const add6 = ([a, b]) => a + b; // array destructuring

const arr = [6, 10, 2];
console.log(add6(arr)); // 16


const add7 = (a, b) => a + b;


/* ================= function arguments ================ */

function sum(a,b,c){
    return arguments;
}
console.log(sum(1,2,3)); // [Arguments] { '0': 1, '1': 2, '2': 3 }
console.log(sum(2,3,4,5)); // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }


// Arrow functions do not have their own 'arguments' object
const sum2 = (a,b,c) =>{
    return arguments;
}
// console.log(sum2(1,2,3)); // error


function sum3(a,b,c){
    return arguments[0] + arguments[1] + arguments[2];
}
console.log(sum3(1,2,3)); // 6
console.log(sum3(3,4,5,6,7)); // 12
console.log(sum3(1,2)); // NaN


/* =========== Arrow function with 'this' ========== */

// this refers to the current object 

// In the global scope:
// - In browsers: 'this' refers to the global object (window).
// - In Node.js: 'this' refers to the global object (global).

// In a regular function:
// - 'this' refers to the object that is calling the function (dynamic binding).

// In an object method, 
// - 'this' refers to the object that is calling the method (dynamic binding).

// In a constructor function,
// - 'this' refers to the object that is being created.

// In an event handler, 
// - 'this' refers to the element that is handling the event.


this.name = 'Kamal';

const person = {
    name : 'Bimal',
    normalfunction : function(){
        console.log(this.name); 
    },
    arrowFunction: () => {
        console.log(this.name); 
    }
}

console.log(this.name); // Kamal

person.normalfunction(); // Bimal
person.arrowFunction(); // Kamal

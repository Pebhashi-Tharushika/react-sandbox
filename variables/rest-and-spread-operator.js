/* ---------------------- spread operator ---------------------------- */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]

function sum(a, b, c) {
    return a + b + c;
}


console.log(sum(1, 2, 3)); // 6

console.log(sum(arr1)); // 1,2,3undefinedundefined

console.log(sum(arr1, arr2)); // 1,2,34,5,6undefined

console.log(sum(arr1[0], arr1[1], arr1[2])); // 6

/* ========= to spread ========= */

/* Array */
console.log(sum(...arr1)); // 6


/* ========= to combine ========= */

/* Array */
const arr3 = [arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

const arr4 = [...arr1, ...arr2];
console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]


/* Object */
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }




/* ========= to copy ========= */

/* Array */
const array = [1, 2, 3];
const arrayCopy = [...array];
console.log(arrayCopy); // [ 1, 2, 3 ]
console.log(array === arrayCopy); // false
console.log(array[0] === arrayCopy[0]); // true

// here, share the same reference
const array2 = [1, 2, 3];
const arrayCopy2 = array2;
console.log(arrayCopy2); // [ 1, 2, 3 ]
console.log(array2 === arrayCopy2); // true
console.log(array2[0] === arrayCopy2[0]); // true


/* Object */
const object = { a: 1, b: 2 };
const objectCopy = { ...object };
console.log(objectCopy); // { a: 1, b: 2 }
console.log(object === objectCopy); // false
console.log(object.a === objectCopy.a); // true


// here, share the same reference
const object2 = { a: 1, b: 2 };
const objectCopy2 = object2;
console.log(objectCopy2); // { a: 1, b: 2 }
console.log(object2 === objectCopy2); // true
console.log(object2.a === objectCopy2.a); // true




/* ========= to pass as arguments ========= */

function add(a, b, c) {
    console.log(a + b + c);
}

/* Array */
const arr = [1, 2, 3];
add(...arr); // 6

/* Object */
const obj = { a: 1, b: 2, c: 3 };
// add(...obj); // error
add(...Object.values(obj)); // 6



/* ---------------------- rest operator ---------------------------- */

/* ========= to collect / handle function parameter length ========= */

const arrayA = [1, 2, 3];
const arrayB = [1, 2, 3, 4, 5, 6];

function addAll(a, b, c) {
    console.log(a + b + c); // 6
}

addAll(...arrayA); // 6
addAll(...arrayB); // 6

function addAll2(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    console.log(sum); // 6
}

addAll2(...arrayA); // 6
addAll2(...arrayB); // 21





/* ================== Array Destructuring ================ */

const myArray1 = [1, 2, 3, 4, 5];
const [first, second, ...rest_args] = myArray1;

console.log(first); // 1
console.log(second); // 2
console.log(rest_args); // [ 3, 4, 5 ]
console.log(rest_args[0]); // 3
console.log(rest_args[1]); // 4

const [first2, second2, rest_args2] = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(first2); // a
console.log(second2); // b
console.log(rest_args2); // c
console.log(rest_args2[0]); // c
console.log(rest_args2[1]); // undefined


/* ================== Object Destructuring ================ */
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
};
const { name, age, ...rest } = myObject;
console.log(name); // John
console.log(age); // 30
console.log(rest); // { city: 'New York' , country: 'USA' }

const { name: n, age: a, ...rest_obj } = myObject;
console.log(n); // John
console.log(a); // 30
console.log(rest_obj); // { city: 'New York' , country: 'USA' }
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


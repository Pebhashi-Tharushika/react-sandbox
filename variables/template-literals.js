const text = "This is a text";

const text2 = 'This is a text 2';

const text3 = `This is a text 3`;


console.log(text);
console.log(text2);
console.log(text3);


// multiline strings

const text4 = "This \n\tis \n\t\ta \n\t\t\ttext";

const text5 = `This 
    is 
        a 
            text`;

console.log(text4);
console.log(text5);


// string interpolation

const name = "John";
const city = "New York";

console.log("Hello I'm " + name + " and I live in " + city);
console.log(`Hello I'm ${name} and I live in ${city}`);


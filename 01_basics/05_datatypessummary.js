//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "uttkarsh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *************************************************

// stack(primitive), Heap(non-primitive)

let myName = "Uttkarsh";
let myNewName = myName;
myNewName = "Hello";

console.log(myName);
console.log(myNewName);

let userOne = {
    email : "uttkarshsingh19732gmail.com",
    upi : "uttkarsh@ybl"
}

let userTwo = userOne ; // the same reference gets passed 

userTwo.email = "uttkarsh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
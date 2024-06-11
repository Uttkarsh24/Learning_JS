const name = "uttkarsh"
const repoCount = 12;

// 

console.log(`My name is ${name} and the repo count is ${repoCount}`);

let gameName = new String('Elden Ring'); // another way to declaring strings using objects

// now we must revise all the different methods of the String class

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   uttkarsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://uttkarsh.com/uttkarsh%20 "

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
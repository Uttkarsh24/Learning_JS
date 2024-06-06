const score = 400; // javascript automatically declares it as a number
//console.log(score);

const balance = new Number(100);//explicitly defining it as a number
//console.log(balance);

//console.log(balance.toString()); //converts num => string

// toFixed method quite frequently while making e-commerce websites
// console.log(balance.toFixed(2));// => 100.00

//toPrecision method gives value in significant numbers
const anotherNum = 234.69;
// console.log(anotherNum.toPrecision(4)); //=> 234.7

const hunderds = 1000000;
// console.log(hunderds.toLocaleString());
// console.log(hunderds.toLocaleString('en-IN'));

// **************************MATHS********************************

console.log(Math);

//revise all different methods such as floor, ceil ,round , abs , min , max ,etc

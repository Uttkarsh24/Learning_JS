// global scope k pollution ko htane k liye use krte hai iife 

//example:

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('uttkarsh')

//ye saale ko pta nhi hota hai kha khtm hona hai to semicolon lgana mt bhulna

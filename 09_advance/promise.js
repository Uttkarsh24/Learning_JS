//creating 
const promiseOne = new Promise(function(resolve,reject){
    //do an async task like calls to database
    setTimeout(() => {
       console.log("Hello World");
       resolve()
    }, 1000);
});
//consumption of a promise
promiseOne.then(function(){
    console.log("Promise Consumed");
})

//creating and consuming in one line
new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log("Hello World");
       resolve()
    },1000)
}).then(function(){
    console.log("Async 2 complete");  
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Uttkarsh", email:"uttkarsh@example.com"}) 
        //we generally pass objects to then function but you can also pass anything else you want.
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"uttkarsh"})
        } else {
            reject("ERROR ! something went wrong.")
        }
    },1000)    
})

//hell chaining and using catch function to solve errors
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//singleton -> when we declare the objects by constructor , then it will became singleton.
//but when we declare the obj by literal..it will not became sigleton



//object literals

const mySym = Symbol("key1")

const JSUser = {
    name : "shweta" ,
    age : 21 ,
    [mySym] : "myKey1",
    location : "jsr",
    email : "abc@123" ,
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
    
}

// console.log(JSUser.email);// not a correct way
// console.log(JSUser["email"])//correct way 
// console.log(JSUser[mySym]);//important // mykey1
// console.log( typeof JSUser[mySym]);// string

JSUser.email = "chatgpt@gmail.com"
// console.log(JSUser ["email"]);

//to free any propagation
// Object.freeze(JSUser);// no changes will be made in object from now
// JSUser.name = "singh"
// console.log(JSUser["name"]);//shweta


JSUser.greeting = function () {
    console.log("Hello JS user")
}
// console.log(JSUser.greeting); // undefined
console.log(JSUser.greeting());//Hello JS user

JSUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`); //Hello JS user, shweta
}

console.log(JSUser.greetingTwo());
 
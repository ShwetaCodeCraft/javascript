const user = {
    username: "shweta",
    age : 21,

    welcomeMsg : function () {
        //when you need to visit current contex, you need to use "this keyword"
        console.log(`${this.username}, welcome to the website`);
    }
}
// user.welcomeMsg() // shweta, welcome to the website
// user.username = "sam"
// user.welcomeMsg() // sam, welcome to the website


// console.log(this); // {}

//basic arrow function (Explicit return)

// const addNo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addNo(2, 9)); // 11


//Implicit return arrow function

// const addNo = (num1, num2) => num1+num2
//     //or
//     const addNo = (num1, num2) => (num1+num2)
// console.log(addNo(2, 9)); // 11

// if are writing the return code in curly braces , then we have to use return keyword.
//and if we are not using it..we dont have to (important)

//if we need to return the obj
const addNo = (num1, num2) => ({username : "shweta"})
console.log(addNo(2, 9)); // { username: 'shweta' }

//differencce between normal function and arrow function
// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== // read in copy notes

// const score = 200

// if (score > 100) {
//     let power = "fly" // yha var ka use isiliye ni krte kyoki var ka scope globally hai
//     console.log(`User power: ${power}`); // uper let ya const use kia hai isiliye sirf yhi line print ho ri hai
// }

//we should not use var bcz it is global scope
// but let and const are of block scope
// console.log(`User power: ${power}`); // agr uper hmne var use krk define kia hota to ye line v print hoti


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // very unreadable code..we should not use it


//nesting:-

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
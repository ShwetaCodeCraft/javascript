// function addTwoNo(number1 , number2) { //parameters
//     console.log(number1 + number2);
    
// }
addTwoNo(3, 4) // 7 // arguments
addTwoNo(3, "a") // 3a
addTwoNo(3, null)// 3

// const result1 = addTwoNo(3, 5) // 8
// console.log(result1); // undefined

function addTwoNo(number1 , number2) { //parameters
    // var result = number1 + number2
    // return result;
    // console.log("shweta"); // when function returns the result, it will not move to forward code under that function. so nthing will print here.
    
    //or
    return number1 + number2
    
}

const result2 = addTwoNo(9,4);
console.log(result2); // 13

function login(username) {
    //you need to return the function only then it will get printed.
    return `${username} just logged in`
}
// here you need to pint the output by console.log. only calling the function ans passing the argument will not print anything
console.log(login("shweta")); // shweta just logged in

//when you dont pass any argument then output will be undefined
console.log(login()); //undefined just logged in

// if you dont want to return anything if no arguments has passed
function login2(user) {
    if(user === undefined) /*or (!user)*/{
        console.log("please enter user name: ");
        return        
    }
    return `${user} logged in`
}
console.log(login2());//please enter user name:
                      //undefined
// if you have to pass atleast one value , then just give the value at the time of function declaration

function login3(user = "sneha") {
    if(user === undefined) /*or (!user)*/{
        console.log("please enter user name: ");
        return        
    }
    return `${user} logged in`
}
console.log(login2());
console.log(login2("bulbul"));


//Rest operator

function calculateCartPrize(num) {
    return num;
}

console.log(calculateCartPrize(100, 400, 300)); // 100

function calculateCartPrize2(...num) {
    return num;
}

console.log(calculateCartPrize2(100, 400, 300)); // [ 100, 400, 300 ]


function calculateCartPrize3(val1, val2, ...num) {
    return num;
}

console.log(calculateCartPrize2(100, 400, 300, 200)); // [ 100, 400, 300, 200 ]


const user = {
    username : "shweta" ,
    price : 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    //Username is shweta and price is 999
}

handleObject(user);
handleObject({
    username: "sam",
    price: 222
}) //Username is sam and price is 222

const myArr = [100,200,300,400]

function returnSecondVal(getArr) {
    return getArr[1]
}
console.log(returnSecondVal(myArr)); // 200
console.log(returnSecondVal([1,2,3,4,5])); // 2

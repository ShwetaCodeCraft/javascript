//Datatypes of JS:-

//Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreVal= 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId); //false bcz it is not unique

const bigNumber = 2543754343142353654n

//Reference type or Non Primitive
//Array, Objects, Functions


const hero = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name : "shweta",
    age : 21,
}

const myFunc = function(){
    console.log("Hello World");
    
}
console.log(typeof score);// number
console.log(typeof scoreVal);//number
console.log(typeof isLoggedIn);//boolean
console.log(typeof outsideTemp);//object
console.log( typeof bigNumber);//bigint


console.log(typeof hero); //object
console.log(typeof myObj);//object
console.log(typeof myFunc);//function

// 1) Primitive Datatypes
//        datatype & returnValue
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        datatype & returnValue
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//*********************MEAMORY**************/

//Two types of memory:= Stack memory & Heap Memory
//Primitive Datatype stores in Stack Memory
//Reference Datatypes stores in Heap Memory
//Stack (Premitive) , Heap (Reference)
// when we use stack memory, we got the copy of the defined datatype
// when we use heap memory, we got the original reference of defined datatype

let myName = "shweta"
let anotherName = myName
anotherName= "bulbul"

console.log(myName); // shweta
console.log(anotherName); //bulbul

let userOne = {
    name : "sneha",
    age : 22
}

let userTwo = userOne

userTwo.age = 25;

console.log(userOne.age); // 25
console.log(userTwo.age); //25 

// bcoz object stores in heap memory and in heap memory, 
//datatype takes the actual reference of the data . 
//Not the copy of the data or variable.




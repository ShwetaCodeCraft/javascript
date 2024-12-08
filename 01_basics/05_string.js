const name = "shweta"
const repoCOunt = 50
//here we will use backticks(` `) to display something.
console.log(`Hello , my name is ${name} and my repo count is ${repoCOunt}`);



const gameName = new String('ShwetaSingh')

console.log(gameName[0]); // S
console.log(gameName.__proto__); // {}

console.log(gameName.length); //11
console.log(gameName.toUpperCase());//SHWETASINGH
console.log(gameName.charAt(4)); // t
console.log(gameName.indexOf('t'));//4

const newString = gameName.substring(0,4)
console.log(newString); // Shwe

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // e

const newStringOne = "   shweta   " ;
console.log(newStringOne);//   shweta   //
console.log(newStringOne.trim());//shweta

const myname = "ShwetaBulbulSingh"
console.log(myname.replace('Bulbul' , '_'));//Shweta_Singh
//to check whether this string is present in the const or not.
console.log(myname.includes('Bulbul'));//true
console.log(myname.includes('_'));//false

console.log(myname.split('_'));




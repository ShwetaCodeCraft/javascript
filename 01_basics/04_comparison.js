//** WE SHOULD AVOID THESE TYPE OF COMPARISONS**//
//coz the clean code is only valuable . these kind of code is not acceptable and readable as well.
console.log(2>1);//true
//it gives boolean value.
console.log(2>=1);//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

//the reason is that an equality == and comparisona > < >= <= work differently.Comparisons convert null to a Number, treating it as 0.
//Thats why (3) null >= 0 is true and (1) null> 0 is false.

console.log(undefined>0); //false
console.log(undefined<0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false
console.log(undefined<=0); //false


//===

console.log("2" === 2); // false







const score = 400
console.log(score); //400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString());// 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(1));//100.0

const otherNum = 123.563
console.log(otherNum.toPrecision(4));//123.6

const hundreds = 1000000
console.log((hundreds.toLocaleString('en-IN')));//10,00,000


//*********************MATHS*********************/

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//nearest integer // 5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4,3,6,8));//3

console.log(Math.random());//gives random values btwn 0 to 1 // 0.19717144365534756
console.log(Math.random()*10+1);//5.158679840716395
console.log(Math.floor(Math.random()*10)+1);//7

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);//13





 






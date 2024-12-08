//array

const myArr = [0, 1, 2, 3 ]

const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);//1
// console.log(myArr2[2]); //3

//Array Methonds

myArr.push(6)
myArr.push(7)
myArr.pop()
// console.log(myArr); //[ 0, 1, 2, 3, 'shweta', 6 ]


myArr.unshift(9)
// console.log(myArr);//[ 9, 0, 1, 2, 3, 'shweta', 6 ]

myArr.shift()
// console.log(myArr); //  1, 2, 3, 'shweta', 6 ]

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3));// 2



const newArr = myArr.join()

// console.log(myArr); // [ 0, 1, 2, 3, 6 ]
// console.log(newArr);//0,1,2,3,6
// console.log(typeof newArr);// string



////slice , splice


// console.log("A" , myArr); // A [ 0, 1, 2, 3, 6 ]

const myn1 = myArr.slice(1,3)

// console.log(myn1);//[ 1, 2 ]
// console.log("B" , myArr); // B [ 0, 1, 2, 3, 6 ]

//splice (impportant)
const myn2 = myArr.splice(1,3) // B [ 0, 1, 2, 3, 6 ]
//console.log("C" , myArr); // C [ 0, 6 ]
//console.log(myn2); // [ 1, 2, 3 ]


const marvel_heros = ["thor" , "ironman", "spiderman"]
const dc_heros = ["supernam" , "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'supernam', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);//flash

// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);  //[ 'thor', 'ironman', 'spiderman', 'supernam', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heros, ...dc_heros]

// console.log(all_new_heroes); // 'thor', 'ironman', 'spiderman', 'supernam', 'flash', 'batman' ]

const another_arr = [1, 2, 3, [4, 5, 6] , [7, 8, [9, 0]]]
// console.log(another_arr); //[ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 0 ] ] ]


// console.log(another_arr.flat(Infinity)); //[
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9, 0
//   ]

console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name : "hitesh"})); //[]


let score1 = 100
let score2 = 200
let score3 = 300
 
console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]









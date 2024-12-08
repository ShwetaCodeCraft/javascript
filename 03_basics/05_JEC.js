//   JAVASCRIPT EXECUTION CONTEXT (revise lec- 25 again for interview perspective)
// -> This meance how a java program runs or execute the file or code made by you
// JS runs the progran in two phases

//types of phases ->
//1. memory creation phase =>
// Global EC
// Function EC
//Eval Execution context



//2. Execution phace =>
//code :

let val1 = 13
let val2 = 3
function addNum(num1 , num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(13,6)

//step1- Global Execution-> this
//step2 - memory phase -> //in this phase , all variables are collected and saved as undefined data
//   val1 = undefined
//   val2 = undefined
//   addNum = undefined
//   result1 = undefined

//Step-3 Execution phase->
//val1 = 10
//Vl2 = 5
//total -> 15
 // here the total val is transfers to global execution context
 // then Global EC got deleted              

//  second phase-> call stack
//lifo principle works here

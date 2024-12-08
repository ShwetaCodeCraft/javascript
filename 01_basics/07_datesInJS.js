//Dates

let myDate = new Date()
console.log(typeof myDate);//object (inportant)
console.log(myDate);// 2024-12-06T14:05:23.073Z
console.log(myDate.toString()); // Fri Dec 06 2024 19:35:23 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri Dec 06 2024
console.log(myDate.toLocaleString()); // 6/12/2024, 7:35:23 pm

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate); //2023-01-22T18:30:00.000Z (in JS january month starts from 0)
console.log(myCreatedDate.toLocaleString());// 23/1/2023, 12:00:00 am


let CreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(CreatedDate); // 2023-01-22T23:33:00.000Z
console.log(CreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am


// // let CreatedDate = new Date("2023-01-14") // 14/1/2023, 5:30:00 am
// let CreatedDate = new Date("01-14-2023") // 14/1/2023, 12:00:00 am


let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1733524624426
// console.log(myCreatedDate.getTime());//1674412200000
// console.log(Math.floor(Date.now()/1000));// 1733524720

let newDate = new Date()
console.log(newDate); // 2024-12-06T22:41:55.711Z
console.log(newDate.getMonth() + 1);// 12
console.log(newDate.getDay()); 6


newDate.toLocaleString('defaul',{
    weekday: "long"
})


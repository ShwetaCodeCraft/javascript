// const tinderUSer = new Object()// singleton object
// console.log(tinderUSer)//{}

const tinderUSer = {} //non-singleton obj
// console.log(tinderUSer); // {}


tinderUSer.id = "123abc"
tinderUSer.name = "Shweta"
tinderUSer.isLoggedIn = false
// console.log(tinderUSer);//{ id: '123abc', name: 'Shweta', isLoggedIn: false }



const regularUser = {
    email : "abc@123",
    fullname : {
        userfullname : {
        firstname : "shweta",
        lastname : "singh"
    }
    }
}

// console.log(regularUser.fullname.userfullname);//{ firstname: 'shweta', lastname: 'singh' }

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({} , obj1, obj2)
//its a good practice
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//obj under array
const users = [
    {
        id : 1,
        email : "abc@gmail.co1"

    },
    {
        id : 2,
        email : "abc@gmail.co2"

    },
    {
        id : 3,
        email : "abc@gmail.co3"

    }
]


// console.log(users[0].email); //abc@gmail.co1

// console.log(tinderUSer); // { id: '123abc', name: 'Shweta', isLoggedIn: false }

// console.log(Object.keys(tinderUSer)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUSer));//[ '123abc', 'Shweta', false ]
// console.log(Object.entries(tinderUSer)); // [ [ 'id', '123abc' ], [ 'name', 'Shweta' ], [ 'isLoggedIn', false ] ]


// console.log(tinderUSer.hasOwnProperty('isLoggedIn')); // true




//**************destructuring in objects************** */

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "HC"
}
// const {courseInstructor } = course
// console.log(courseInstructor); // HC


const {courseInstructor : Instructor } = course
console.log(Instructor); // HC





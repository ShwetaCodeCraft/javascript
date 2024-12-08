// Immediately Invoked Function EXpress (IIFE)
//syntax- 
// (for function definition) (for execution call)


//(function chai(){
//      console.log(`DB connected`);
     
//    }) ();
// global scope ke pollution ko hatane ke lie hmne () ka or IIFE ka use after function declaration kia hai


//named IIFE

// (function chai(){
//      console.log(`DB connected`); // DB connected
     
//    }) ();
// semicolon is necessary




//simple or unnamed IIFE

((name) => {
    console.log(`DB connected to ${name}`); //DB connected to shweta
    // there should be no space between $ and {}
    
})('shweta')

//if you are writing two IIFE one after another.. you have to add semicolon in between

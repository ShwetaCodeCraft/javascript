// {} -> scope 

//nested scope

function one() {
    const name = "shweta"
    function two() {
        const title = "singh"
        console.log(name);
    }
    // console.log(title);// error bcoz two() is not being called yet
    two();    
}
one() // shweta
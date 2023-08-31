/*---------------------------------- */

/*-----------FUNCTION TYPE EXPRESSIONS------------ */
//--It is the simplest way to describe a function

/*-----EXAMPLE------- */


function greeter(fn:(a:string)=>void){ //the syntax ((a:string)=>void) means a function with one parameter named (a)
    fn('Hello there')                  //of type string that doesn't have a return value

}

function printToConsole(word:string){
    console.log(word)
}

greeter(printToConsole)

//They can be used in scenarios such as:-
//--To declare a variable that can hold a function
//--To specify the type of a function parameter or return value
//--To create a generic function that can work with different data

/*-------- */
//We can also use type aliases to name a function type
type myfunc=(a:string)=>void //--we've used type aliases

function hapa(fn:myfunc){
    //-------
}
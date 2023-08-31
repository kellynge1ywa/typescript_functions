/**----------- */

/**-----GENERIC FUNCTIONS----- */
//-We use it to write functions where inputs are related to outputss.

//--A generic function is a function that can work with different types of data
//--It does this by using type parameters, which are variables that represent the types of data that the function
//--can work with 
//--Generic functions can be used to print any type of data

//In typescript generics are used when we want to describe a correspondence between two values.
//--We do this by declaring a (type parameter) in the function signature.

function genericType<Type>(arr:Type[]):Type | undefined{
    return arr[0]
}

//we can now use the above function with multiple data types

const moja=genericType([1,2,3,4,4]) //with numbers

const jina=genericType(['Tunda','Mti','Mto','Mlima'])
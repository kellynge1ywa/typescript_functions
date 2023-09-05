/**<-----------------------> */

/**<----SPECIFYING TYPE ARGUEMENTS----> */
//--Typescript can usually infer the intended type arguements in a generic call, but not always.

/**<--EXAMPLE--> */

function combine<Type>(arr1:Type[],arr2:Type[]):Type[]{
    return arr1.concat(arr2)

}
//const arr=combine([1,2,3,4],['Hello']) //it throws an error  as typescript cannot infer intended type arguements

/**<---SOLUTION---> */
//---This can be solved by manually specifying Types to be inferred

const arr=combine<number | string>([1,2,3,4,],['Machungwa'])
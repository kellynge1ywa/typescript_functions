/**-------------------------------- */

/**<----INFERENCE-------> */

//Works like in generic function where we can use multiple types
//One can be for input and another for output

/**<----EXAMPLE----> */
function map<input,output>(arr:input[],func:(arg:input)=>output):output[]{
    return arr.map(func);

}

const ourValues=map([1,2,3,4],(k)=>parseInt('k'));
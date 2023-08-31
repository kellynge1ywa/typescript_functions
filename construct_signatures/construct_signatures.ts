/**------------------------------------- */

/**---CONSTRUCT SIGNATURES---- */
//Functions can also be invoked with the new operator.
//Typescript refer to this as a constructor as they create a new object
//You can add a constructor signature by adding a new keyword in front of a call signature

type someConstructor={
    new (jina:string):object;

}

function matumizi(mth:someConstructor){
    return new mth('Hapa na pale')
}


//You can combine both call signatures and construct signatures

type yote={
    (mimi:string):string;
    new (wewe:string):object;
}


//some objects like date can be called with or without new keyword
/**---------------------------------------- */
/**------CALL SIGNATURES------------------- */
//Functions can have properties in addition to being called
//-Call signature, is the type of a function including the names and types of its parameters and its return type.
//--

type callSignature={
    description:string;
    (otherArguement:number):boolean; //-call signature we (:)between paramter list and return type instead
                                     // of (=>)
}

function doSomething(fn:callSignature){
    console.log(fn.description + 'returned' + fn(10))

}

function otherFunc(otherArguement:number){
    return otherArguement > 10;

}

otherFunc.description='Guten Tag'

doSomething(otherFunc)
/**------------------------------------ */

/**<--------------CONSTRAINTS---------------> */

//--We might want to relate two values,but we can only operate on a certain subset of values.
//-- We can use constraints to limit the kind of type that a type parameter can accept.

/**<---EXAMPLE---> */

function longest<Type extends{length:number}>(a:Type, b:Type){ //-we use extends to constrain type parameters to a property
    if (a.length >= b.length){
        return a;
    } else{
        return b;
    }
}

const longerArray=longest([1,2,3],[4,5,6,7,8])

const longerString=longest('Matunda','Miti')

//const longerNumber=longest(1,2) --it prompt an error because number does not have length property
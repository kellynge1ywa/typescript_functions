/**<------------------------------------------> */

/**<------FUNCTION OVERLOADS--------> */

//We can specify a function that can be called in different ways by writing overload signature

//Function overloading is the ability to define multiple functions with the same name but with different parameters
//--and  / or return types.

/**<----EXAMPLE----> */
function add(x:string, y:string):string ; //this is an overload signature 
function add(x:number, y:number):number; //this is an overload signature
function add(x, y):number | string{  //this is an implementation signature
    if(x && y!== undefined){
        if(typeof x && typeof y ==='number'){
            return x + y;
        }else{
            return x + y
        }
    }
    else{
        return 'it is undefined'
    }
    
   
}

//-Overload signature and implementation signature must be compatible


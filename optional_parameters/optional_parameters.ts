/**<------------------------------------> */

/**<----------OPTIONAL PARAMETERS--------> */

//--we use optional parameters to make typescript function make their paremeters optional

function fn(n?:number){
    console.log(n?.toFixed())

}

fn();
fn(10)
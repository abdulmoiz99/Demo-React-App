import React, {useState} from "react";

const Counter = () =>{

    const [count,SetCount] = React.useState(0);
   
    return(
        <React.Fragment>
           <p>The count is: {count} </p>
           <button onClick ={() => SetCount(count+1)}>Inc</button>
           <button onClick ={() => SetCount(count-1)}>Dec</button>
        </React.Fragment>
    )
}
export default Counter;
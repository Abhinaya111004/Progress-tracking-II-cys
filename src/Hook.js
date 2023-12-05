import React, { useState } from 'react'

const Hook=()=>{
    const[count,setCount]=useState(0);
    const handler=()=>{
        if(count>0)
            return(setCount(count-1))
        else
            return(setCount(0))
    }
return (
    <div>
    <p>Count:{count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={handler}>Decrement</button>
    </div>
);
};
export default Hook

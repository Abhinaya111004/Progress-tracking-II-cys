import React, { useState } from 'react'
const UseState=()=>{
  const[count,setCount]=useState(0)
  const handleClick=()=>{
    if(count>0){
        return(setCount(count-1))
    }
    else{
        return setCount(0)
    }
  }
  return(
    <div>
    <p>Count: {count}</p>
    <button onClick={()=>setCount(count+1)}> Increment </button>
    <button onClick={handleClick}>Decrement</button>
    </div>
  )
}
export default UseState
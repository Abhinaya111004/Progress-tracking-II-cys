import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
function Timer(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
            alert('useEffct')
        },1000);
},[]);
    const update=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h1>I've rendered {count} times!</h1>
        <button onClick={update}>onClick</button>
        </>
    )
}
export default Timer
import React,{useState} from 'react'
import SignUp from '../Signup';
const Conditional = () => {
    const[state,setState]=useState({isLogged:true});
 if(state.isLogged){
    return(
        <SignUp />
    )
 }
 else{
    return(
        <h1>Please Login</h1>
    )
 }
}

export default Conditional
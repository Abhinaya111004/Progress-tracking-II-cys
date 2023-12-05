import React,{useState} from 'react'
import SignUp from '../Signup'
const TernaryConditional = () => {
    const[state,setState]=useState({isLogged:true})
  return (
    state.isLogged? <SignUp/> : <h1> Please Login</h1>
  )
}

export default TernaryConditional
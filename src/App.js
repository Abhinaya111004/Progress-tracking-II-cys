/*import React from 'react'
import './App.css'
import img from './image/skcet1.jpg'
const App = () => {
  return (
    <>
   <div className='clg'><u>SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</u></div>
  <div><img src={img} alt="error"  className='img'></img></div>
    <div> <ol type="1" className='list'><b>
    <li>CSE</li>
    <li>MCT</li>
    <li>EEE</li>
</b>
</ol>
<ul type="square"><b>
    <li>IT</li>
    <li>AIDS</li>
    <li>CIVIL</li></b>
</ul>
<dl>
    <dt>CSE</dt>
    <dd><b>The full form of CSE is Computer Science Engineering. It is an engineering course that involves several computer science aspects essential for the creation of the computer system.</b></dd>
    <dt>MCT</dt>
    <dd><b>Mechatronics is a branch of engineering that focuses on designing, manufacturing and maintaining products that have both mechanical and electronic components.</b></dd>
</dl>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1jkszm02PbY?si=P0nt9qI2EwofrhUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
<div><h1>For more information <a href="https://www.skcet.ac.in/" target="blank">www.skcet.in</a></h1></div>
    </>
  )
}

export default App*/
import ReactDom from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './Router/Signin';
import Login from './Router/Login';
import Home from './Router/Home';
const Navigate =()=>{
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin />}/>
    <Route path='Login' element={<Login />}/>
    <Route path='Home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default Navigate
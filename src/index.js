import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Func from './Func';
import App from './App';
import Dummy from './Dummy';
import Car from './Car';
import Login from './login/Login';
import ClassDemo from './ClassDemo';
import img from './nike/nike.jpeg';
import Mui from './Mui';
import Signup from './Signup';
import Signin from './Signin';
import Signupside from './Signupside';
import Dashboard from './Dashboard';
import Digital from './Digital';
import Hook from './Hook';
import Lifecycle from './Lifecycle';
import Arrays from './Arrays';
import Hoc from './Hoc';
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import Parent from './Parent';
import UseState from './Hooks/UseState/UseState'
import UseEffect from './Hooks/UseEffect/UseEffect';
import UseContext from './Hooks/UseContext/UseContext';
import Conditional from './ConditionalRendering/Conditional';
import TernaryConditional from './ConditionalRendering/TernaryConditional';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Form />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'

function Child({onMessageSend}){
    return(
        <div>
        <h1>Child Component</h1>
        <button onClick={()=>onMessageSend('Hello from Child')}>Send Message to Parent</button>
        </div>
    );
}
export default Child
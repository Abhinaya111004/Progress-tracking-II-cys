import React from 'react'
import ItemList from './ItemList';
const Arrays=()=>{
    const ArrayItems=['item 1','item 2','item 3'];
    return(
        <div>
        <h1>My items</h1>
        <ItemList items={ArrayItems}/>
        </div>
    );
};
export default Arrays;
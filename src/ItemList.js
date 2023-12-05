import  PropTypes  from 'prop-types';
const ItemList=({items})=>{
    return(
        <div>
        <ul>
        {items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
        </ul>
        </div>
    );
}
ItemList.prototype={
    items:PropTypes.arrayOf(PropTypes.string).isRequired
};
export default ItemList
import React, { Component } from 'react'
import img from './nike/nike.jpeg'
export default class ClassDemo extends Component {
    constructor(props){
        super(props);
        this.state={count1:0};
    }
    handleDecrement=()=>{
        if(this.state.count1>0){
            return(
                this.setState(prevState=>({count1:prevState.count1-1}))
            )
        }
        else{
            return(
                this.setState(prevState=>({count1:prevState.count1=0}))
            )
        }
    }
    handleIncrement=()=>{
        this.setState(prevState=>({count1: prevState.count1+1}))
    }
    handleCart=()=>{
        alert(this.state.count1+" "+ this.props.desc+' shoes are addes successfully')
    }

  render() {
    return (  
      <div>
      <table>
      <tbody>
      <tr>
      <td width='200px'><img src={img} alt={this.props.imgUrl} width='100' height='100'></img></td>
      <td width='200px'>{this.props.item}</td>
      <td width='200px'>{this.props.desc}</td>
      <td width='200px'><button onClick={this.handleIncrement}> + </button>
      {this.state.count1}
      <button onClick={this.handleDecrement}> - </button> </td>
      <td width='200px'><button onClick={this.handleCart}>Add to Cart</button></td>
     
      </tr>
      </tbody>
      </table>
      </div>
    )
  }
}

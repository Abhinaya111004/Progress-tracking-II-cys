import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state={sec:0}
    }
    handlestart=()=>{
        this.setState(prevState=>({sec:prevState.sec+1}))
    }
    handlestop=()=>{
        this.setState(prevState=>({sec:prevState.sec}))
    }
    handlereset=()=>{
        this.setState(prevState=>({sec:prevState.sec=0}))
    }
  render() {
    return (
      <body>
      <h2>Time : {this.state.sec} seconds</h2>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={this.handlestart}>Start</Button>
      <Button variant="contained" color="error" onClick={this.handlestop}>Stop</Button>
      <Button variant="contained" color="primary" onClick={this.handlereset}>Reset</Button>
    </Stack>
      </body>
    )
  }
}
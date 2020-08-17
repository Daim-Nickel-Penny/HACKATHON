import React, { Component } from 'react'
import axios from 'axios';

class Val extends Component {
 state={
   
   "name":''
 }
componentDidMount() {
    

    axios.get(`https://hackathonai.herokuapp.com/predict`)
    .then(res => {
      const name = res.data;
      this.setState({ name });
    })


  
  }


  render() {

    return (
      <div>
      
      </div>
    
      
    )
  }
}

export default Val;


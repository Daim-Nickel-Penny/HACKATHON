import React, { Component } from 'react'
import axios from 'axios';

class Val2 extends Component {
 state={
    "num":''

 }

 getData (){
  
 }
 async componentDidMount(){
    let dt={"num":6}
    const response = await axios.post('https://hackathonai.herokuapp.com/posting',dt,{headers:{"Content-Type" : "application/json"}});
    console.log(dt)
    console.log(response.data)
 }



 

    render() {
        
     
        return (
          <div>
           <form onSubmit={this.handleSubmit}>
              <label>
               Number
                <input type="number"/>
              </label>
              <button type="submit">Add</button>
            </form>
    
          </div>
        
          
        )
      }
}

export default Val2;


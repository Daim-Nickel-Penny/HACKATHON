import React, { Component } from 'react';

class Val extends Component{

    constructor(props) {
        super(props);
        this.state = { num: '' };
      }
      myChangeHandler = (event) => {
        this.setState({num: event.target.value});
      }


    render(){
        let header = '';

        if (this.state.num) {
            header = <h1>Number is  {this.state.num}</h1>;
          } else {
            header = '';
          }

        return(
            <form>
            {header}
            <p>Enter your number:</p>
            <input
              type='number'
              onChange={this.myChangeHandler}
            />
            </form>
        );
    }
}

export default Val;
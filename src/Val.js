import React, { Component } from 'react'


class Val extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
   
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText)
    })
    xhr.open('GET', 'https://hackathonai.herokuapp.com/predict')
    xhr.send()
  }

  render() {
    return (
      <div>
       
      </div>
    )
  }
}

export default Val;
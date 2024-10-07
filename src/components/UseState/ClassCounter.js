import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0,
            "name":"mahesh"
        }
    }

    incrementCount = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>count{this.state.count}    name:{this.state.name}</button>
      </div>
      
    )
  }
}

export default ClassCounter
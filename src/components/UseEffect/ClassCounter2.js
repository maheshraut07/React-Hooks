import React, { Component } from 'react';

class ClassCounter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: " "
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){           // updating the docuement title only when the counter changes i.e. running the useEffecct only when the counter changes 
        console.log("Updating Document Title")
        document.title = `Clicked ${this.state.count} times`;  
    }
    
  }


  render() {
    return (
      <div>
        <input type="text" value = {this.state.name} onChange={e =>{this.setState({name: e.target.value})}} />
       <button onClick={() => this.setState({count: this.state.count + 1})}>
        Click {this.state.count} tims
       </button>
      </div>
    );
  }
}

export default ClassCounter2;

import React from 'react';
import ZipForm from './ZipForm.jsx';

class App extends React.Component{

  constructor(){
    super()
    this.state = {zipcode: "00000"}
    this.setZipcode = this.setZipcode.bind(this)
  }

  setZipcode(code){
    console.log(code)
    console.log("hey there")
    this.setState({
      zipcode: code
    })
  }

  render(){
    return (
      <div className="container">
        <h1>Whats the weather?</h1>
        <ZipForm setZip={this.setZipcode}/>
        <p>{this.state.zipcode}</p>
      </div>
      )
  }
}

export default App;

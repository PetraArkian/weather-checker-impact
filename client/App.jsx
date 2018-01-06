import React from 'react';
import ZipForm from './ZipForm.jsx';
//const key = "fba0baa10095b78d"

class App extends React.Component{


  constructor(){
    super()
    this.state = {zipcode: "", display: false}
    this.setZipcode = this.setZipcode.bind(this)
  }

  processData(data){
    //console.log(data)
    this.setState({
      feelsLike: data.current_observation.feelslike_string,
      location: data.current_observation.display_location.full,
      currentTemperature: data.current_observation.temp_f,
      humidity: data.current_observation.relative_humidity
    })
    console.log(this.state)
    //this.render()
  }

  setZipcode(code){
    console.log(code)
    //console.log("hey there")
    fetch("http://api.wunderground.com/api/fba0baa10095b78d/conditions/q/"+code+".json")
    .then(r => r.json())
    .then(r => this.processData(r))
    .catch(function(error) {
      console.log(error)
    });
    this.setState({
      zipcode: code,
      display: true
    })
  }

  render(){
    console.log("render")
    return (
      <div className="container">
        <h1>Whats the weather?</h1>
        <ZipForm setZip={this.setZipcode}/>
        <center>
        <h2>zipcode: {this.state.zipcode}</h2>
        <h2>feels like: {this.state.feelsLike}</h2>
        <h2>location: {this.state.location}</h2>
        <h2>current temperature: {this.state.currentTemperature}</h2>
        <h2>humidity: {this.state.humidity}</h2>
        </center>
      </div>
      )
  }
}

export default App;

import React, { Component } from 'react'
import Form from './Form';
import Result from './Result';
import '../components/App';

const APIKey = '6f0884425a8af17d336368ae24870812';

class App extends Component{

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    preasure: "",
    wind: "",
    err: false 
  }

  handleInputChange = (e) =>{
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) =>{
    e.preventDefault()
    console.log("dziala");
    const API =  `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=6f0884425a8af17d336368ae24870812&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Failed")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleDateString()
      this.setState({
        err: false,
        date: time,
        city: this.state.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        preasure: data.main.pressure,
        wind: data.wind.speed,
      })
    })
    .catch(err => {
      console.log(err)
      this.setState(state => ({
        err: true,
        city: this.state.value
      }))
    })
  }
  
  render(){
    return (
      <div className='App'>
        <Form value={this.state.value} 
        change = {this.handleInputChange}
        submit = {this.handleCitySubmit}
        />
        <Result 
        weather = {this.state}
        />
      </div>
    );
  }
}

export default App;

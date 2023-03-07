import React, { Component } from 'react'
import Form from './Form';
import Result from './Result';
import axios from 'axios';
import '../components/App';
import '../components/App.css'

class App extends Component{

  state = {
    value: "",
    name: "",
    surname: "",
    age: 0,
    gender: 0,
    err: false 
  }

  handleInputChange = (e) =>{
    this.setState({
      value: e.target.value
    })
  }

  handleSurnameSubmit = e =>{
    e.preventDefault();

    axios.get(`https://localhost:7117/api/users/(${this.state.value})`)
    .then(response => {
      if(response.ok){
        return response
      }
    })
    .then(response => response.data)
    .then(data => {
      this.setState({
        err: false,
        name: data.name,
        surname: this.state.value,
        age: data.age,
        gender: data.gender
      })
    })
    
    .catch(err => {
      console.log(err)
      this.setState(state => ({
        err: true,
        surname: this.state.value
      }))
    })
  }
  

  render(){
    return (
      <div className='App'>
        <Form value={this.state.value} 
        change = {this.handleInputChange}
        submit = {this.handleSurnameSubmit}
        />
        <Result 
        infoAboutUser = {this.state}
        />
      </div>
    );
  }
}

export default App;

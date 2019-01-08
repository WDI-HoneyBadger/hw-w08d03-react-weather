import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather'
import Form from './components/Form';




class App extends Component {
  state={
    zipCode: '',
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  gitWeather = (e)=>{
    e.preventDeafult()
    const zipCode= e.target.value;
    

    const api = fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&units=imperial&appid=e6ed8d551a8b3f095477b7bd887962a0`);
     const data =  api.json();
    
     if(zipCode !==''){
     this.setState({
      tempreature:data.main.temp,
      city:data.name,
      country:data.main.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
     })
    } else {
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'please enter data'
    })
  }
  }
  render(){
    return (
      <div className="app">
        
       <Weather
        tempreature={this.state.tempreature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
         />
       <Form  gitWeather={this.gitWeather}/>
      </div>
    );
  }
  }

export default App;

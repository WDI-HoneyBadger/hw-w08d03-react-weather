import React, { Component } from 'react';
import './App.css';
import Zipcode from './components/Zipcode';

class App extends Component {
  render() {
    return (
      <div className="app">
       <center><h1 >Forcast By Zipcode</h1></center> 
       <Zipcode/>
      </div>
    );
  }
}

export default App;

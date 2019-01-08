import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search'

class App extends Component {
constructor(){
  super();
  this.state = {

  }
}

  render() {
    return (
      <div className="App">
      <h1>Weather</h1>


      <Search/>

       
      </div>
    );
  }
}

export default App;

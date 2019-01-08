import React, { Component } from 'react';
import Research from './Research';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
    <Research/> 

      </div>
    );
  }
}

export default App;


// `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=0a1c6077653143999ddcc4382bcea8cf`
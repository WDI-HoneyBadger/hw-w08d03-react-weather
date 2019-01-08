import React, { Component } from 'react';

import './App.css';
import Search from './components/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather app!</h1>
        <Search/>
      </div>
    );
  }
}

export default App;

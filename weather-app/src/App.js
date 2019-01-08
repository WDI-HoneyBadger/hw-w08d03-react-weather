import React, { Component } from 'react';
import './App.css';
import Search from './components.js/Search';

class App extends Component {
  render() {
    return (
      <div className="app">
      <h1>Weather app!</h1>
        <Search />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="app">
        
        <h1>The weather today...</h1>
        <Search/>
    
      </div>
    );
  }
}

export default App;

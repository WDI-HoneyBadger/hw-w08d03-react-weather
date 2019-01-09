import React, { Component } from 'react';
import Search from './component/search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="result">
        <Search/>
      </div>
    );
  }
}

export default App;
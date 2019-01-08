import React, { Component } from 'react';
import './App.css';
import RandomQuote from './components/RandomQuote';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activeComponent : 'random'
    }
  }

  toggleActiveComponent(){
    this.state.activeComponent === 'random' ?
    this.setState({activeComponent: 'search'}) :
    this.setState({activeComponent: 'random'})
  }

  render() {
    return (
      <div className="app">

        <button className="toggle-btn" onClick={this.toggleActiveComponent.bind(this)}>
          {this.state.activeComponent === 'random' ? 'Search' : 'Random'}
        
        </button>
        {this.state.activeComponent === 'random' ? <RandomQuote/> : <Search/>}
    
      </div>
    );
  }
}

export default App;

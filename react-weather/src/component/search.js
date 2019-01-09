import React, { Component } from 'react';

class Search extends Component {

  constructor(){
    super()
    this.state = {
      input: '',
      result: ''
    }
  }
  handleTheChange(event){
    this.setState({
      input: event.target.value
    })
  }

  handleTheSubmit(event){
    event.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=6096d9e4be91aaf9094b01a7bd37697d&units=imperial`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
          result: data
        })  
      })
    .catch(error => console.log(error));
};


renderSearchResults(searchResponse) {

  return (
    <div>
    <h3>Name: {searchResponse.name}</h3>
    <h3>Temperature: {searchResponse.main.temp}</h3>
    <h3>Description: {searchResponse.weather[0].description}</h3>
    <h3>main Temp: {searchResponse.main.temp_min}</h3>
    <h3>max Temp: {searchResponse.main.temp_max}</h3> 
    </div>
  )
} 

  render() {
    return (
      <div className="App">
        <form className="search" onSubmit={this.handleTheSubmit.bind(this)}>
          <input type="text"  onChange={this.handleTheChange.bind(this)}/>
          <button>search</button>
        </form>
        <div className="search-results">
          {(this.state.result !== '')?this.renderSearchResults(this.state.result): 'Enter zip code'}
        </div>
      </div>
    );
  }
}

export default Search;
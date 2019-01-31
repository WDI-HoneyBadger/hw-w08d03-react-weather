import React, { Component } from 'react';

class Search extends Component {

  constructor(){
    super()
    this.state = {
      zipcode: '',
      result: ''
    }
  }
  handleChange(event){
    this.setState({
      zipcode: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.zipcode}&appid=701759b1d18271fc4b575f09332e1c84&units=imperial`;
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
        <form className="search" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"  onChange={this.handleChange.bind(this)}/>
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

import React, { Component } from 'react';




class Resarch extends Component {
    constructor(){
        super();
        this.state = {
            zipCode: '',
            searchResult: '',
            
        }
    }
    handleChange(event){
        this.setState({
            zipCode: event.target.value
        })
    }


handleSubmit(event){
    event.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&units=imperial&appid=d119d44c1e59033a0096e4d5cbed97b3`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        this.setState({
            searchResult: data
        })
    })
    .catch( error => {
        console.log(error);
      })
    }
      renderSearchResults(search) {

        return (
          <div>
          <h3>Name: {search.name}</h3>
          <h3>Temperature: {search.main.temp}</h3>
          <h3>Description: {search.weather[0].description}</h3>
          <h3>main Temp: {search.main.temp_min}</h3>
          <h3>max Temp: {search.main.temp_max}</h3> 
          </div>
        )
      
} 
render(){
    return(
        <div>
        <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)}/>
            <button>Search</button>
        </form>
        <div className="search-results">
          {(this.state.searchResult !== '')?this.renderSearchResults(this.state.searchResult): 'Enter zip code'}
        </div>
        </div>
    );
    }
}
export default Resarch;
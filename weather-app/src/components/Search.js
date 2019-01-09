import React, { Component } from 'react';

class Search extends Component {

    constructor() {
        super();
        this.state = {
            searchByZipCode: '',
            searchResult: {}
        }
    }

    handleChange(event) {
        this.setState({
            searchByZipCode: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchByZipCode}&appid=ba12554b5e959f6882661cb8859f5567&units=imperial`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    searchResult: data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderSearchResults(searchResponse) {

        if(this.state.searchResult.name) {
            console.log(searchResponse)
            return(
            <div className="result-text">
                <h2> Name:</h2>  <p>{ searchResponse.name}</p>
                <h3> Temperature: </h3>{ searchResponse.main.temp}
                <h3> Description:</h3> { searchResponse.weather[0].description}
                <h3> Min Temp: </h3> { searchResponse.main.temp_min}
                <h3> Max Temp: </h3>{ searchResponse.main.temp_max}
            </div>
            )
        } else {
            return <p>City not found</p>
        }
        
    }

    render() {
        return (
            <div className="search">
                <form  onSubmit={this.handleSubmit.bind(this)}>
                search by Zip code:  
                    <input type="text" placeholder="entre the Zip code" onChange={this.handleChange.bind(this)} />
                    <button>search</button>
                </form>
                <div className="result">
                {this.renderSearchResults(this.state.searchResult)}
                </div>
            </div>
        )
    }
}


export default Search;
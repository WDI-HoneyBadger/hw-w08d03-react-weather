import React, { Component } from 'react';




class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchWeather: '',
            searchResult: ''
        }
    }

    handeleSubmit(event) {
        event.preventDefault();

        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.searchWeather}&units=imperial&appid=76a1a558003f7e09ab7594e310aadfcb`
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


    handleChange(event) {
        this.setState({
            searchWeather: event.target.value
        })
    }

    rendersearchResult(searchResponse) {
        if (searchResponse !== "") {
            return <div>
                <p>name : {searchResponse.name}</p>
                <p> Current Weather: {searchResponse.main.temp}</p>
                <p> Description: {searchResponse.weather[0].description}</p>
            </div>
            
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handeleSubmit.bind(this)}>
                    <input type="text" name="search-terms" onChange={this.handleChange.bind(this)} />
                    <button>search</button>
                </form>
                <div>
                {this.rendersearchResult(this.state.searchResult)}
                </div>
            </div>

        )
    }
}
export default Search;
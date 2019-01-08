import React, { Component } from 'react';
import '../App.css';


class Search extends Component {
    constructor() {
        super();
        this.state = {
            zipCode: '',
            searchResult: ''
        }
    }
    handelSubmit(event) {
        event.preventDefault()
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&units=imperial&appid=e6ed8d551a8b3f095477b7bd887962a0`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    searchResult: data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    handelChange(event) {
        this.setState({
            zipCode: event.target.value
        })
    }
    renderSearchResut(searchRes) {
        return <div> <h2> {searchRes.main.temp_min}</h2>
            <h2> {searchRes.main.temp_max}</h2>
            <h2> {searchRes.coord.lon}</h2>
            <h2> {searchRes.coord.lat}</h2>
            <h2> {searchRes.base.stations}</h2>
            <h2> {searchRes.weather[0].description}</h2>
            <img src={`http://openweathermap.org/img/w/${searchRes.weather[0].icon}.png`} alt="weather" />
        </div>

    }
    render() {
        return (
            <div>
                <header>
                    <h1>Weather app!</h1>
                </header>
                <div className="container">
                    <div className="search-container">
                        <label>Zip Code:</label>
                        <form className="search" onSubmit={this.handelSubmit.bind(this)}>
                            <input type="number" id="zipcode" onChange={this.handelChange.bind(this)} />
                            <button id="submit">Search</button>
                        </form>
                    </div>
                    <div id="result">
                        {(this.state.searchResult !== '') ? this.renderSearchResut(this.state.searchResult) : ' '}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;

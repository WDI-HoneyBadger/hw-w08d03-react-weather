import React, { Component } from 'react';

class Search extends Component {

    constructor(){
        super();
        this.state = {
            zipcode: '',
            isFound: false,
            name: '',
            temp: '',
            description: '',
            min: '',
            max: '',
            lan: '',
            lon: '',
            humidity: '',
            windSpeed: ''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            name: '',
            temp: '', 
            description: '',
            min: '',
            max: '',
            lan: '',
            lon: '',
            humidity: '',
            windSpeed: '',
            isFound: false
        })
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&units=metric&appid=51dd9e9ad7e916d691e13198b0573be0`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.main){
                    this.setState({
                        name: data.name,
                        temp: data.main.temp, 
                        description: data.weather[0].description,
                        min: data.main.temp_min,
                        max: data.main.temp_max,
                        lan: data.coord.lat,
                        lon: data.coord.lon,
                        humidity: data.main.humidity,
                        windSpeed: data.wind.speed,
                        isFound: true
                })
                } else {
                    this.setState({isFound: false})
                }
            })
            .catch(error => console.log(error))
    }

    handleChange(event){
        this.setState({zipcode: event.target.value})
    }

    renderResult(name, temp, description, min, max, lan, lon, humidity, windSpeed){
        return (
            <div className="result">
                <p>City name: {name}</p>
                <p>Current temperature: {temp}</p>
                <p>Weather description: {description}</p>
                <p>Min temp: {min}</p>
                <p>Max temp: {max}</p>
                <p>Latitude: {lan}</p>
                <p>Longitude: {lon}</p>
                <p>Humidity: {humidity}</p>
                <p>Wind speed: {windSpeed}</p>
            </div>
        )
    }

    renderNotFound(){
        return (
            <div className="result">
                <p>City Not Found</p>
            </div>
        )
    }

    render(){
        const {name, temp, description, min, max, lan, log, humidity, windSpeed, isFound} = this.state;

        return (
            <div className="container">
                <div className="search-container">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="search-bar" onChange={this.handleChange.bind(this)}/>
                    <button>Search</button>
                    </form>
                    </div>
                    {(isFound) ? 
                        this.renderResult(name, temp, description, min, max, lan, log, humidity, windSpeed, isFound)
                        : this.renderNotFound()}   
            </div>
        )
    }
}
export default Search;

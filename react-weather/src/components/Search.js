import React, { Component } from 'react';
const moment = require('moment');


class Search extends Component {
    constructor() {
        super();
        this.state = {
            zipCode: '',
            weatherInfo: {
                cityName: ''
            }
        }
    }

    //render Riyadh's information on component mount
    //========================
    // componentWillMount() {
    //     const url = `http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=0093f5c9f9847f340d4ffb453c1a258d`;
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(weatherData => {
    //             console.log(weatherData)
    //             const weatherInfo = {
    //                 cityName: weatherData.name,
    //                 temp: weatherData.main.temp,
    //                 description: weatherData.weather[0].description,
    //                 minTemp: weatherData.main.temp_min,
    //                 maxTemp: weatherData.main.temp_max,
    //                 humidity: weatherData.main.humidity,
    //                 pressure: weatherData.main.pressure,
    //                 sunrise: moment.unix(weatherData.sys.sunrise).utc().format("LT"),
    //                 sunset: moment.unix(weatherData.sys.sunset).utc().format("LT")
    //             }

    //             this.setState({ weatherInfo: weatherInfo })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
    //========================

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({ zipCode: event.target.value }

            //render result without pressing search
            //========================
            //     , () => {
            //     const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&units=metric&APPID=0093f5c9f9847f340d4ffb453c1a258d`;
            //     fetch(url)
            //         .then(response => response.json())
            //         .then(weatherData => {
            //             console.log(weatherData)
            //             const weatherInfo = {
            //                 cityName: weatherData.name,
            //                 temp: weatherData.main.temp,
            //                 description: weatherData.weather[0].description,
            //                 minTemp: weatherData.main.temp_min,
            //                 maxTemp: weatherData.main.temp_max
            //             }
            //             this.setState({ weatherInfo: weatherInfo })
            //         })
            //         .catch(error => {
            //             console.log(error)
            //         })
            // }
            //========================
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&units=metric&APPID=0093f5c9f9847f340d4ffb453c1a258d`;
        fetch(url)
            .then(response => response.json())
            .then(weatherData => {
                console.log(weatherData)

                const weatherInfo = {
                    cityName: weatherData.name,
                    temp: weatherData.main.temp,
                    description: weatherData.weather[0].description,
                    minTemp: weatherData.main.temp_min,
                    maxTemp: weatherData.main.temp_max,
                    humidity: weatherData.main.humidity,
                    pressure: weatherData.main.pressure,
                    sunrise: moment.unix(weatherData.sys.sunrise).utc().format("LT"),
                    sunset: moment.unix(weatherData.sys.sunset).utc().format("LT")
                }

                this.setState({ weatherInfo: weatherInfo })
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderWeatherInfo(weatherInfo) {
        return (
            <div id="result">
                <h2>{weatherInfo.cityName}</h2>
                <p>{"Temperature: °" + weatherInfo.temp + " C"}</p>
                <p>{"Description: " + weatherInfo.description}</p>
                <p>{"Minimum temp: °" + weatherInfo.minTemp + " C"}</p>
                <p>{"Maximum temp: °" + weatherInfo.maxTemp + " C"}</p>
                <p>{"Humidity: " + weatherInfo.humidity + " %"}</p>
                <p>{"Atmospheric pressure: " + weatherInfo.pressure + " mb (sea level)"}</p>
                <p>{"Sunrise time: " + weatherInfo.sunrise + " UTC"}</p>
                <p>{"Sunset time: " + weatherInfo.sunset + " UTC"}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="container">

                <div className="searchContainer">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Zip Code:</label>
                        <input type="number" id="zipcode"
                            onChange={(event) => this.handleChange(event)} />
                        <button id="submit">Search</button>
                    </form>
                </div>

                {this.state.weatherInfo.cityName !== '' ? this.renderWeatherInfo(this.state.weatherInfo) : <p>Enter Zip code and search!</p>}

            </div>
        )
    }
}

export default Search;
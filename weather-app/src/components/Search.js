import React, {Component} from 'react';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            zipCode: '',
            cityName: '',
            currTemp: '',
            weatherDes: '',
            minTemp: '',
            maxTemp: '',
            humidity: '',
            pressure: '',
        }
    }

    
    handleSubmit(event){
        event.preventDefault();
        
        const url= `http://api.openweathermap.org/data/2.5/weather?q=${this.state.zipCode},us&units=imperial&appid=95e7d762db2901ee8a467411ab6c041c`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    cityName: data.name,
                    currTemp: data.main.temp,
                    weatherDes: data.weather[0].description,
                    minTemp: data.main.temp_min,
                    maxTemp: data.main.temp_max,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    //updates the state as we type
    handleChange(event){
        // console.log(event.target.value);
        this.setState({
            zipCode: event.target.value
        })
    }

    // // renders the state that stores the results from the API
    // renderSearchResults(searchRes){
    //     return searchRes.map((res, index) => {
    //         return <p key={index}> {res.advice}</p>
    //     })
    // }


    render(){
        return(
            <div>
                <form className="search" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="search-zipcode"
                           onChange={this.handleChange.bind(this)} />
                    <button>Search</button>
                </form>
                <div className="search-zipcode">
                    <h4>City Name: {this.state.cityName}</h4>
                    <p>Current Temperature: {this.state.currTemp}</p>
                    <p>Description: {this.state.weatherDes}</p>
                    <p>Min: {this.state.minTemp}</p>
                    <p>Max: {this.state.maxTemp}</p>
                    <p>Humidity: {this.state.humidity}%</p>
                    <p>Pressure: {this.state.pressure}</p>
                </div>
            </div>
        )
    }
}

export default Search;
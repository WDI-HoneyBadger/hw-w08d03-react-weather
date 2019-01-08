import React , {Component} from 'react'

class Search extends Component{
    constructor(){
        super();
        this.state = {
        searchZip : '',
        cityName: '',
        currentTemp: '',
        weatherDescription: '',
        minTemp: '',
        maxTemp: ''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.searchZip}&units=imperial&appid=a9bfdaae31fa1aa7f7e9d30d888b7ca7`;
         fetch(url)
         .then(response=> response.json())
         .then(data => {
            this.setState({
                cityName: data.name,
                currentTemp: data.main.temp,
                weatherDescription: data.weather[0].description,
                minTemp: data.main.temp_min,
                maxTemp: data.main.temp_max
            })
         })
         .catch(error=> console.log(error))

    }
    handleChange(event){  
        this.setState({
            searchZip: event.target.value
        })
    }
    showResult(){
        const result = document.getElementById('result');
        result.style.display = 'block'
    }

    render(){
    return (
        <div className="container">
        <div className="search-container">
        <label>Zip Code:</label>
         <form className="search" onSubmit={this.handleSubmit.bind(this)}> 
         <input type="text" name="search-Zips" onChange={this.handleChange.bind(this)}/>
         <button onClick={this.showResult.bind(this)}>Search</button>
         </form></div>
            <div id="result" hidden>
            <h3>{this.state.cityName}</h3>
            <p>Current temp:{this.state.currentTemp}</p>
            <p>Weather description: {this.state.weatherDescription}</p>
            <p>Min temp: {this.state.minTemp}</p>
            <p>Max temp: {this.state.maxTemp}</p>
            </div>
        </div>
        )
    }

}

export default Search;

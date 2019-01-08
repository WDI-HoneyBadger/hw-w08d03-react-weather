import React , {Component} from 'react';

class Search extends Component{
constructor(){
    super();
    this.state = {
        searchZip :'',
        cityName: '',
        currentTemp: '',
        weatherDescription: '',
        minTemp: '',
        maxTemp:''
    }
}
handelSubmit(event){
    //handels when we submit the form
    //submita whatever is in the search box (using state)
    event.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchZip}&units=imperial&appid=a9bfdaae31fa1aa7f7e9d30d888b7ca7`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
            cityName: data.name,
            currentTemp: data.main.temp,
            weatherDescription: data.weather[0].description,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max
        })
    })
    .catch(error => console.log(error))
   }

   handelChange(event){
    //update the submit as we type
    this.setState({
        searchZip :event.target.value
    })
}


render(){
    return(<div>
  

            <form className="search" onSubmit={this.handelSubmit.bind(this)}>
            <input type="text" name="search-zip" onChange={this.handelChange.bind(this)}/>
            <button>Search</button>
            </form>
            <div className='seearch-zip'>
          
                <h3>{this.state.cityName}</h3>
            <p>{this.state.currentTemp}</p>
            <p>{this.state.maxTemp}</p>
            <p>{this.state.minTemp}</p>
            </div>

    </div>)
}
}

export default Search ;
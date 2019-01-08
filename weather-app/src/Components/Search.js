import React, {Component} from 'react'

class Search extends Component {
constructor(){
    super()

    this.state = {
        searchZipcode: '',
        cityName: '',
        description: '',
        currentTemp: '',
        minTemp: '',
        maxTemp: ''
    }
}

handleSubmit(event){
    event.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.SearchZipcode}&units=imperial&appid=de601f137a5b9e31385c2ee6d540f0f4`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        this.setState({
            cityName: data.name,
            description:data.weather[0].description,
            currentTemp:data.main.temp,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max



        })
    })
}


handleChange(event){
    this.setState({SearchZipcode : event.target.value})
}


render(){

    return(

        <div>
        <div>
        <label>Zip Code:</label>
         <form className="search" onSubmit={this.handleSubmit.bind(this)}> 
         <input type="text" name="search-Zips" onChange={this.handleChange.bind(this)}/>
         <button>Search</button>
         </form>
         </div>
         <p>cityName : {this.state.cityName}</p>  
         <p>description : {this.state.description}</p>
         <p>minTemp: {this.state.minTemp}</p>
         <p>maxTemp: {this.state.maxTemp}</p>
         <p> currentTemp: {this.state.currentTemp}</p>
         
        </div>
    )
}


}




export default Search;
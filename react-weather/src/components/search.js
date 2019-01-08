import React, {Component} from 'react';


class Search extends Component {
    constructor(){
        super();
        this.state ={
            searchTerm: '',
            searchResults: {}
        }
    }
    handleSubmit(event){
        //handles when we submit the form.
        //submits whatever is in the search box (using state)
        event.preventDefault();
        const apiKey = '9d8b93a64699c17d4d9462c9377a734f';
        const zipcode = this.state.searchTerm;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipcode},us&units=metric&appid=${apiKey}`;
        fetch(url)
            .then( response => response.json())
            .then( data => {
                data.name ? 
                this.setState({searchResults: data}) :
                this.setState({searchResults: data});
            })
            .catch( error => console.log(error))
    }

    handleChange(event){
        //ubdates the state as we type
        this.setState({
            searchTerm: event.target.value
        });
    }

    renderSearchResults(res){
        //render results from the API 
        if(res.name){

            return(  <div className="result">
                    <h2>City Name: {res.name}, {res.sys.country}</h2>
                    <h3>Current Temperature: {res.main.temp}</h3>
                    <h3>Weather: {res.weather[0].description}</h3>
                    <p>Max Temperature: {res.main.temp_max}</p>
                    <p>Min Temperature: {res.main.temp_min}</p>
                    </div>
            )
        }else {
            return <h2>{res.message}</h2>
        }
    }



    render() {
        return(
            <div className="container">
            <div className="search-container">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Zip Code:</label>
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <button>Search</button>
            </form>
            </div>
            
                {this.renderSearchResults(this.state.searchResults)}
            
            </div>
        )
    }
}

export default Search;
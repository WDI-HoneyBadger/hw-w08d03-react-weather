import React, {Component} from 'react';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            zipCode: 0,
            searchResult: undefined
        }
    }

    handelSubmit(event){
        event.preventDefault();
        const weatherAPIkey = '7ffd49cb02e6f7e14455ae1919e59d33';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.zipCode},us&units=imperial&appid=${weatherAPIkey}`
        fetch(url)
            .then(respons => respons.json())
            .then( data =>{
                (data.cod === '404')? this.setState({searchResult: undefined}):
                this.setState({searchResult: data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    handelCahnge(event){
        this.setState({
            zipCode: event.target.value
        })
    }

    renderSearchResult(searchResponse){
        return (
            <div>
                <h4>Name: {searchResponse.name}</h4>
                <p>Temperature: {searchResponse.main.temp}</p>
                <p>Description: {searchResponse.weather[0].description}</p>
                <p>main Temp: {searchResponse.main.temp_min}</p>
                <p>max Temp: {searchResponse.main.temp_max}</p>
            </div>
        )
    }

    render(){
        return(
            <div className="container">
                <form>
                    <label>Zip Code:</label>
                    <input type="number" name="zip-code" onChange={this.handelCahnge.bind(this)} />
                    <button type="submit" onClick={this.handelSubmit.bind(this)}>Search</button>
                </form>
                <div>
                {(this.state.searchResult)?
                this.renderSearchResult(this.state.searchResult) :
                <p>Please Enter a valid Zip Code</p> 
                }
                </div>
            </div>
        )
    }
}

export default Search;
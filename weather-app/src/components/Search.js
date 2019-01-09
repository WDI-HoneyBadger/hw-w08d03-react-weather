import React, { Component } from 'react'; 

class Search extends Component {
    constructor(){
        super();
        this.state ={
            searchResults: ""

        }
    }
    handleSubmit(event){
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.searchTerm}&appid=9cd930a1b8a843b5cf6625fadd0f9e3c`
        fetch(url)
        .then(response => response.json())
        .then( data => {
            this.setState({
                searchResults: data
            })
        })
    }
    handleChange(event){
        this.setState({
            searchTerm: event.target.value
        })
    }
    renderSearchResults(searchResponse){
        if (searchResponse != ""){
            return (
                <div>
                     <h1>name :{searchResponse.name}</h1>
                     <h4>temperature :{searchResponse.main.temp}</h4>
                     <h4>description :{searchResponse.weather[0].description}</h4>
                </div>
            )
        }

    }
    render(){
        return(
            <div>
                <form className="search" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <button>write your zip code hear </button>
                </form>
                <div>
                {this.renderSearchResults(this.state.searchResults)}
                </div>
            </div>
        )
    }
}
export default Search; 
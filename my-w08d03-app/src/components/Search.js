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
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.searchTerm}&appid=18ca002803f384c6e5344362a7e38e40`
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
                     <p>name :{searchResponse.name}</p>
                     <p>temperature :{searchResponse.main.temp}</p>
                     <p>description :{searchResponse.weather[0].description}</p>
                </div>
            )
        }
       
    }
    render(){
        return(
            <div>
                <form className="search" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <button>Enter a zip code</button>
                </form>
                <div>
                {this.renderSearchResults(this.state.searchResults)}
                </div>
            </div>
        )
    }
}
export default Search;
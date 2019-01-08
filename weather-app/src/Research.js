import React, { Component } from 'react';


class RandomQuote extends Component {
    constructor() {
        super();
        this.state = {
            zipcode: '',
            searchResult: ''
        }
    }
    // componentWillMount(){


    handleSubmit(event) {
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode}&units=imperial&appid=0a1c6077653143999ddcc4382bcea8cf`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    searchResult: data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            zipcode: event.target.value
        })
    }

    //   renderError(){
    //     return <p>no results found</p>
    //   }

    //   handleSearchResults(searchResponse){
    //     return searchResponse === 'error' ? this.renderError() : this.renderSearchResults(searchResponse)
    //   }

    renderSearchResults(searchResult) {
        // condition if the search result in not empty run this function 

        return <div> <div className="Temp">
            <h3>{searchResult.main.temp}</h3>
        </div>

            <div>
                <p>{searchResult.main.temp_max}</p>
                <p>{searchResult.main.temp_min}</p>
                <p>{searchResult.coord.lon}</p>
                <p>{searchResult.coord.lat}</p>
            </div>
                </div>
    }

    // your methods
    render() {
        return (
            <div className="weatherApp">
                <header>
                    <h1>Weather app!</h1>
                </header>
                <div className="container">
                    <div className="search-container">
                        <label>  Zip Code:</label>
                        <form className="search" onSubmit={this.handleSubmit.bind(this)}>
                            <input name="number" id="zipcode" onChange={this.handleChange.bind(this)} />
                            <button id="submit">search</button>
                        </form>




                        <p> for example: 85281 </p>
                    </div>
                    <div id="result">

                        {(this.state.searchResult !== '') ? this.renderSearchResults(this.state.searchResult) : ' '}
                    </div>
                </div>
            </div>
        )
    }
}





export default RandomQuote; 
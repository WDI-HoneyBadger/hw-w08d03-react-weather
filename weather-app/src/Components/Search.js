import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            zipCode: '',
            result: ''
        }
    }
    handleSubmt(event) {
        event.preventDefault()

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.zipCode},us&units=imperial&appid=7375257e9cbb8c0b3aad72599de08284`//user will input the code
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    result: data
                })
            })
            .catch(error => {
                console.log(error)
            })

    }
    handleZipCode(event) {
        this.setState({
            zipCode: event.target.value
        })
    }
    renderResults(results) {
        return (
            <div>
                <p>{results.weather.disctiption}</p>
                <p>{results.weather.icon}</p>
                <p>{results.main.temp}</p>
                <p>{results.main.presure}</p>
                <p>{results.main.humidity}</p>
                <p>{results.main.temp_min}</p>
                <p>{results.main.temp_max}</p>

            </div>
        )
    }
    render() {
        return (
            <div className="search-container">
                <label>ZipnCode:</label>
                <form className="search" onSubmit={this.handleSubmt.bind(this)}>
                    <input type="number" id="ZipCode" onChange={this.handleZipCode.bind(this)} />
                    <button>Search</button>
                </form>
            </div>
            <div id="result">

                {(this.state.result !== '') ? this.renderResults(this.state.result) : ''}
            </div>
            
          )
    }

}



export default Search;
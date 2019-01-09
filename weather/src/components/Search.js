import React, { Component } from 'react';


class Search extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            temp: '',
            zipcode: '',
            country: '',
            // searchResult: ''
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode}&appid=01c277731622cb4e2c8058fb4a5f62c1`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    name: data.name,
                    temp:data.main.temp,
                    country:data.sys.country



                })
            })
            .catch(error => console.log(error));
    }


handleChange(event) {
    // console.log(event.target.value);
    this.setState({
        zipcode: event.target.value
    })
}

renderSearchResults(searchResponse){
    // render the state from the API
    return searchResponse.map((response, index) => {
        return <p key={index}>{response.advice}</p>
    })
}

render(){
    return (
        <div>
            <div>
                <form className="search" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="zipcode" onChange={this.handleChange.bind(this)} />
                    <button>search</button>
                </form>
                <p>name: {this.state.name}</p>
                <p>temp: {this.state.temp}</p>
                <p>country : {this.state.country}</p>
            </div>
        </div>
    )
}
}

export default Search; 
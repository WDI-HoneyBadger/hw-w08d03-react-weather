import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      ZipCode: '',
      Name: '',
      Temp: '',
      Description: '',
      min: '',
      max: ''
    }
  }
  handleChange(event) {
    this.setState({
      ZipCode: event.target.value
    })
  }
  handlinlet(event) {
    event.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.ZipCode}&units=imperial&appid=a9bfdaae31fa1aa7f7e9d30d888b7ca7`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: data.name,
          temp: data.main.temp,
          description2: data.weather[0].description,
          min: data.main.temp_min,
          max: data.main.temp_max
        })
      })
      .catch(error => console.log(error))

  }

  Result() {
    const result = document.getElementById('result');
    if (result.style.display === 'none') {
      result.style.display = 'block';
    } else {
      result.style.display = 'none';
    }
  }
  render() {
    return (
      <div>
        <div>
          <p>Zip Code:</p>
          <form className="search" onSubmit={this.handlinlet.bind(this)}>
            <input type="text" name="search-Zips" onChange={this.handleChange.bind(this)} />
            <button onClick={this.Result.bind(this)}>Search</button>
          </form>
          </div>
        <div id="result" hidden>
          <p>{this.state.city}</p>
          <p>temp:{this.state.temp}</p>
          <p>Weather description: {this.state.description2}</p>
          <p>Min: {this.state.min}</p>
          <p>Max: {this.state.max}</p>
        </div>
      </div>
    )
  }

}

export default Search;
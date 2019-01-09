import React, { Component } from 'react';

class Search extends Component {
    constructor(){
      super();
      this.state = {
        zipCode: '00000',
        returnData:{}
      }
    }

    componentWillMount(){

      const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.Zipcode},us&units=imperial&appid=786b8a5caa74509b4b55d700ba5c7efc`
      fetch(url)
        .then( response => response.json())
        .then( data => {
          console.log(data)
          this.setState({
            returnData : data
          })
        })
        .catch( error => {
          console.log(error)
        })
    }

    search(event){
      event.preventDefault()
      this.setState({zipCode: event.taget.value})
    }

    renderSearch(results){
      return(
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

    render(){
        return(
          <div className="container">
          <div className="search-container">
          <form onSubmit={this.search.bind(this)}>
              <label>Zip Code:</label>
              <input type="text" onChange={this.search.bind(this)}/>
              <button>Search</button>
          </form>
          </div>
               {this.renderSearch(this.state.returnData)}
           </div>
        )
      }


    }


export default Search;
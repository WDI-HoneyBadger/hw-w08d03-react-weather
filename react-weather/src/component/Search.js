import React, { Component } from 'react';
class Search extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
            temp: '',
            description: '',
            humidity: '',
            zipCode: ''

        }
    }

 

    handleSubmit(event){

        //for not refreshing the page
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&appid=677acf97a74e281e032bd0b19a100237`;
        fetch(url)
        .then( response => response.json())
                .then( data => {
                    this.setState({
                        name: data.name,
                        temp: data.main.temp,
                        humidity: data.main.humidity,
                        description: data.weather[0].description

                    })
                })
                .catch(error => {
                 console.log(error);
                 this.setState({
                    name: "Not found!",
                    temp: "Not found!",
                    humidity: "Not found!",
                    description: "Not found!"
                })

                window.alert("Enter a valid zip code!");
                })

        }

        handleChange(event){
            this.setState({
                zipCode: event.target.value
            })
        }

    

        renderSearchResults(searchResponse){
            // render the state that stores the results from the API

            
            return searchResponse.map((response, index) => {
                return <p key={index}>{response.weather}</p>
            })
        }

     

            

            
        

          render(){
              return(
                  <div>
                       <div className="cont">
            <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" className="field" name="zipcode" onChange={this.handleChange.bind(this)}/>

            <button className="btn">search</button>
            </form>

            <p className="p1">Name of City:</p> <h1 className="result">  {this.state.name}</h1>
            <p className="p1">Temperature:</p> <h1 className="result">  {this.state.temp}</h1>
            <p className="p1">Humidity:</p> <h1 className="result">  {this.state.humidity}</h1>
            <p className="p1">Description:</p><h1 className="result">  {this.state.description}</h1>
           


        </div>
                  </div>
              )
          }  
        
}


export default Search; 

import React, {Component} from 'react';

class Search extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
            temp: '',
            description: '',
            zipCode: '',

        }
    }

    handleSubmit(event){

        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&appid=107eb85fd837d4501cf5d60f254d18b9`;
        fetch(url)
        .then( response => response.json())
                .then( data => {
                    this.setState({
                        name: data.name,
                        temp: data.main.temp,
                        description: data.weather[0].description,
                                             
                    })
                })
                .catch(error => {
                    console.log(error);
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
                return <p key={index}>{response.advice}</p>
            })
            
            }

          render(){
              return(
                  <div>
                       <div>
            <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" name="zipcode" onChange={this.handleChange.bind(this)}/>
          
            <button>search</button>
            </form>
            
            <h1> name: {this.state.name}</h1>
            <h1> temp: {this.state.temp}</h1>
            <h1> description: {this.state.description}</h1>
           
         
        </div>
                  </div>
              )
          }  
    
}

export default Search;
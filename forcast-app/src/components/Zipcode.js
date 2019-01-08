import React, { Component } from 'react';

class Zipcode extends Component{

    constructor(){
        super()
        this.state = {
            zipcode: '',
            city: '',
            currTemp:'',
            max: '',
            min: '',
            description: ''
        }
    }


    handleSubmit(event){
        event.preventDefault();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.zipcode}&units=imperial&appid=893ce18b746af898f5a5026204e9d002`;
        fetch(url)
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            this.setState({
                city: data.name,
                currTemp:data.main.temp,
                max: data.main.temp_max,
                min: data.main.temp_min,
                description: data.weather[0].description
            })
        })
        .catch(error => console.log(error))

    }

    handleChange(event){
        this.setState({
            zipcode:event.target.value
        })
    }

    renderWeather(){

    }
    
    render(){
        return(
            
            <div>
                <form className="container" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="search-container" onChange={this.handleChange.bind(this)}/>
                    <button>search</button>
                  </form>
               <div className = 'container'>
                  <p>City : {this.state.city}</p> 
                  <p>Current : {this.state.currTemp}</p> 
                  <p>Max : {this.state.max}</p> 
                  <p>Min : {this.state.min}</p> 
                  <p>Description : {this.state.description}</p> 
               </div>
            </div>
        )
    }
}

export default Zipcode;

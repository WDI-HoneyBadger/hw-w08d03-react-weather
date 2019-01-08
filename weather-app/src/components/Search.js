import React, {Component} from 'react';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            searchResults: []

        }
    }

    
    
    //handles when we submit the form
    // submits whatever is in the search box (using state)
    // fetches data from API, searching by whatever is in the input
    handleSubmit(event){
        event.preventDefault(); //to stop refreshing the page if we submit the search
        
        const url= `https://api.adviceslip.com/advice/search/${this.state.searchTerm}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    searchResults: data.slips
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    //updates the state as we type
    handleChange(event){
        // console.log(event.target.value);
        this.setState({
            searchTerm: event.target.value
        })
    }

    // renders the state that stores the results from the API
    renderSearchResults(searchRes){
        return searchRes.map((res, index) => {
            return <p key={index}> {res.advice}</p>
        })
    }


    render(){
        return(
            <div>
                <form className="search" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="search-terms"
                           onChange={this.handleChange.bind(this)} />
                    <button>Search</button>
                </form>
                <div className="search-results">
                    {this.renderSearchResults(this.state.searchResults)}
                </div>
            </div>
        )
    }
}

export default Search;
import React, {Component} from 'react';


class RandomQuote extends Component{
    constructor(){
        super();
        this.state = {
           advice : ''

        }
    }

    componentWillMount(){
        const url= 'https://api.adviceslip.com/advice'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    advice: data.slip.advice
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="randomQuote">
                <p>{this.state.advice}</p>
            </div>
        )
    }
}

export default RandomQuote;
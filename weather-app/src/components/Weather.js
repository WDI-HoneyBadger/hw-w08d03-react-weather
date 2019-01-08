import React from 'react';
import '../App.css';

  const Weather =(props)=> {
  
     return(
      <div>
        {
          props.tempreature &&  <p>tempreature : {props.tempreature}</p> 
        }
        {
          props.city && <p>city :{props.city}</p>
        }
        {
          props.country && <p>country :  {props.country} </p> 
        }
        {
          props.humidity && <p>humidity : {props.humidity}</p> 
        }
        {
          props.tempreature && <p>description : {props.description}</p> 
        }
        {
          props.error && <p>error : {props.error}</p> 
        }
  
      </div>
     )
   }
    
      

  export default Weather;
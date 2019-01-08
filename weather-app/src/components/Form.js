import React from 'react';
import '../App.css';

  const  Form =(props)=> {
    
     return( 
<form onSubmit={props.gitWeather} >
  <input type="text" name="zipCode" placeholder="zipCode"/>
  
  <button> Get Weather</button>
</form>
     )
   }
    

  export default Form ;
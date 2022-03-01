import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
      // console.log(props);
      const {name,capital,region} = props.country;
      const countryStyle ={
            border : '1px solid purple',
            margin :'20px',
            padding : '20px',
            borderRadius : '10px'
                  
      }
      return (

          
            <div style={countryStyle}>
                  
                  <h3> Country : {name.common}</h3>
                  <p>Capital : {capital}</p>
                  <p>Region : {region}</p>
                  <p><Link to={`/name/${name.common}`}>Show Details</Link></p>
            </div>
      );
};

export default Countries;
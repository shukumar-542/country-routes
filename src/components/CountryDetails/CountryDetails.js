import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
      const {countryName} =  useParams();

      const [countries, setCountries] = useState({})
      useEffect(()=>{
            const urls = `https://restcountries.com/v3.1/name/${countryName}`
            fetch(urls)
            .then(res => res.json())
            .then(data => setCountries(data[0]))
      },[]);
      // console.log(countries);
      

      // const {population,name} = countries;
      // console.log(population);
      return (
            <div>
                  <h1>Coutnry name :....{countryName}</h1>
                  {/* <p>population:{population}</p>
                  <p>CountryName: {name.common}</p> */}
                  
            </div>
      );
};

export default CountryDetails;
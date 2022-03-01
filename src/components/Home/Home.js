import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
      const[ countries, setCountries] = useState([])

      useEffect(()=>{
            const urls = 'https://restcountries.com/v3.1/all';
            fetch (urls)
            .then(res => res.json())
            .then(data => setCountries(data))
      },[])
      // console.log(countries);
      return (
            <div>
                  
                 {
                       countries.map(country => <Countries country={country}></Countries>)
                 }
                  
            </div>
      );
};

export default Home;
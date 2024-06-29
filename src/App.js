import './App.css'
import React, { useState } from 'react';

import countries_data from './Components/countries_data';






const MyApp = () => {
    const [index, setIndex] = useState(0);
    const num = Math.ceil(Math.random() * 250);
    function handleChange() {
          setIndex(num)
      

    }
    let countries = countries_data[num]

    return (
        <div>
                <div className='container'>
                    <img className="imageFlag" src={countries.flag} alt={countries.name}></img>
                    <h2>Capital: {countries.capital}</h2>
                    <p>Name: {countries.name}</p>
                    <p>Population: {countries.population}</p>
                    <p>Languages: {countries.languages.join(', ')}</p>
                    <button className='btn' onClick={handleChange}>Select Country</button>

                </div>
            
        </div>

    )
}


export default MyApp;
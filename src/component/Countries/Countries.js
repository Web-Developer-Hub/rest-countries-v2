import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const URL = `https://restcountries.com/v2/all`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setCountries(data))
    }, []) 

    return (
        <div>
            <h1 className="head">Available Country Data Loaded: {countries.length}</h1>
            <div className="countries">
                {
                    countries.map((country) => <Country key={country.numericCode} data={country} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
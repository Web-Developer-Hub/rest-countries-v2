import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flags, region, capital, population, independent, area, currencies} = props.data;

    return (
        <div className="Country">
            
            <div>
                <img src={flags.svg} width="300px" alt="flag"/>
                <h2>Name: {name}</h2>
                <h3>Region: {region}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Population: {population}</h3>
                <h3>Independent: {independent? 'True' || independent: 'False'}</h3>
                <h3>Area: {area}</h3> 
                <h3>currencies: <span>{currencies && currencies[0]?.name} ('{currencies && currencies[0]?.symbol}')</span> </h3>
                {/* this is conditional rendaring.. */}
                {/* <h2>{ props.data.currencies && props.data?.currencies[0]?.name}</h2> */}
                {/* <h2>{ currencies && currencies[0]?.name}</h2> */}
           </div>
        </div>
    );
};

export default Country;
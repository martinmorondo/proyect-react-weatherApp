import { useEffect, useState } from "react";

import { getCountries } from './services/countries';
import { getCities } from './services/cities';
import { getCityWeather } from './services/weather';

import React from 'react';

const App = () => {

   const [countries, setCountries] = useState([]);
   const [cities, setCities] = useState([]);
   const [weather, setWeather] = useState(null);

   useEffect(() => {
      (async () => {
         setCountries(await getCountries());
      })();
   }, []);

   const countryHandler = async e => {
      e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
      setWeather(null);
   };

   const cityHandler = async e => {
      e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));
   };

   return (
      <div className="container">
         <div className="container-1">
            <label>Choose a country: </label>
            <select onChange={countryHandler}>
               <option value = "">Select</option>
               {countries.map(country => <option key = {country.cca2} value = {country.cca2}>{country.name.common}</option>)}
            </select>  
         </div>

         {cities.length > 0 && (
            <div className="container-2">
               <label>Choose a city: </label>
               <select onChange={cityHandler}>
                  <option value = "">Select</option>
                  {cities.map(city => <option key = {city.id}>{city.name}</option>)}
               </select>
            </div>
         )}

         {weather && (
            <div className="container-3">
               <h2>Current temperature: {weather.main.temp}°</h2>
               <p>Min: {weather.main.temp_min.toFixed()}°</p>
               <p>Max: {weather.main.temp_max.toFixed()}°</p>
               <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            </div>
         )}
      </div>
   );
}

export default App;




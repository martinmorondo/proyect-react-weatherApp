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
      <>
         <div>
            <label>Choose a country: </label>
            <select onChange={countryHandler}>
               <option value = "">Select</option>
               {countries.map(country => <option key = {country.cca2} value = {country.cca2}>{country.name.common}</option>)}
            </select>  
         </div>

         {cities.length > 0 && (
            <div>
               <label>Choose a city: </label>
               <select onChange={cityHandler}>
                  <option value = "">Select</option>
                  {cities.map(city => <option key = {city.id}>{city.name}</option>)}
               </select>
            </div>
         )}
      </>
   );
}

export default App;




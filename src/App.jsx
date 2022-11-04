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
         
      </>
   );
}

export default App;




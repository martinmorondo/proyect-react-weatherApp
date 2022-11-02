import { useEffect, useState } from "react"; 

import { getCountries } from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

    // console.log(countries);


  return (
    <>
      <div>
      <label>Elige un país</label>
        <select name = "">
            {countries.map(country => <option key = {country.cca2} value = "">{country.name.common}</option>)}
        </select>
      </div>
    </>
  );
}

export default App;

import { useEffect } from "react"; 

import { ajax } from "./tools/ajax";

const App = () => {

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://restcountries.com/v3.1/all'
    };
    (async () => {
      const countries = await ajax(options);
      console.log(countries);
    })();
  }, []);

  return (
    <>
      <div>
      <label>Elige un país</label>
        <select name = "">
           <option value = "">A</option>
           <option value = "">A</option>
           <option value = "">A</option>
           <option value = "">A</option>
           <option value = "">A</option>
           <option value = "">A</option>

        </select>
      </div>
    </>
  );
}

export default App;

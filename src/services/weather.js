import { ajax } from "../tools/ajax";
// import { apiWeather } from "./creds";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather",
        params: {
            q: city,
            appid:  '7ac5bd23405fc2c7039487736e72cc73',
            units: "metric" // Degrees Celsius.
        }
    };
    return await ajax(optionsRequest);
}

import { ajax } from "../tools/ajax";
import { apiWeather } from "./creds";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather",
        params: {
            q: city,
            appid:  `${apiWeather}`,
            units: "metric" // Degrees Celsius.
        }
    };
    return await ajax(optionsRequest);
}
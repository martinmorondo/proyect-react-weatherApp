import { ajax } from "../tools/ajax";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/3.0/onecall",
        params: {
            q: city,
            appid:  `${keyWeather}`,
            units: "metric" // Degrees Celsius.
        }
    };
    return await ajax(optionsRequest);
}

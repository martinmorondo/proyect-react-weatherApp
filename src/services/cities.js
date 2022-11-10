import { ajax } from "../tools/ajax";


export const getCities = async countryCode => {
    const optionsRequest = {
        method: "GET",
        url:'https://spott.p.rapidapi.com/places/autocomplete',
        headers: {
            "X-RapidAPI-Key": `${import.meta.env.VITE_KEY_CITY}`,
            "X-RapidAPI-Host": "spott.p.rapidapi.com"
        },
        params: {
            limit: 20,
            type: "CITY",
            country: countryCode,
        }
    };
    return await ajax(optionsRequest);
}

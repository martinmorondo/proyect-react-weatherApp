import { ajax } from "../tools/ajax";
// import { apiCity } from "./creds";

export const getCities = async countryCode => {
    const optionsRequest = {
        method: "GET",
        url:'https://spott.p.rapidapi.com/places/autocomplete',
        headers: {
            "X-RapidAPI-Key": '95a328d5d0msh7139ed9d43c526bp183634jsnea117057e63b',
            "X-RapidAPI-Host": "spott.p.rapidapi.com"
        },
        params: {
            limit: 20,
            type: "CITY",
            country: countryCode ?? "AR",
        }
    };
    return await ajax(optionsRequest);
}

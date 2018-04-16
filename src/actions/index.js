import axios from 'axios';

const API_KEY = '311e773de763a5218089da95c220993b';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);
    console.log('REQUEST', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
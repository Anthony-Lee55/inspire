import { AppState } from "../AppState.js";
import { baseURL } from "../env.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

const weatherApi = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/'
})

class WeatherService {


  async getWeather() {
    const response = await api.get('api/weather')
    console.log('☁️📡', response.data);
    const weather = new Weather(response.data)
    AppState.weather = weather
  }
}

export const weatherService = new WeatherService()
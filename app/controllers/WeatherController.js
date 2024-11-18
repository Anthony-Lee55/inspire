import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class WeatherController {
  constructor() {
    console.log('☁️🎮');
    this.getWeather()
    AppState.on('weather', this.drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.toast("Couldn't get Weather", 'error')
    }
  }

  drawWeather() {
    const weather = AppState.weather
    let weatherHTML = weather.weatherTemplate
    setHTML('weather', weatherHTML)
  }
}



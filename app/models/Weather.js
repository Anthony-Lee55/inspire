

export class Weather {
  constructor(data) {
    this.main = data.main
    this.weather = data.weather
    this.temp = data.temp
    // this.fahrenheit = ((1.8)(this.temp - 273) + 32)
    // this.celsius =
    // TODO add this.fahrenheit = calculation from data.temp
    // TODO add this.celsius
    // this.temp = data.main.temp
  }

  // get weatherTemplate() {
  //   return `
  //   <div>
  //   <span id="weather" class="rounded-1 border border-2 p-2">${this.fahrenheit}</span>
  //   </div>
  //   `
  // }

  // get fahrenheitTemp(){

  // }

  // get celsiusTemp(){

  // }
}
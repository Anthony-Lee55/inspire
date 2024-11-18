

export class Weather {
  constructor(data) {
    this.main = data.main
    this.weather = data.weather
    this.temp = data.temp
    // this.temp = data.main.temp
  }

  get weatherTemplate() {
    return `
    <div>
    <span id="weather" class="rounded-1 border border-2 p-2">${this.main.temp}</span>
    </div>
    `
  }
}
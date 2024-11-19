import { AppState } from "../AppState.js";


export class TimeController {
  constructor() {
    console.log('⌚🎮');
    this.drawTime()
  }

  async drawTime() {
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")

    setInterval(() => {

      let currentTime = new Date()

      hours.innerHTML = currentTime.getHours()
      minutes.innerHTML = currentTime.getMinutes()
    }, 1000)
  }

}
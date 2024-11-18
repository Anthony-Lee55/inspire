import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class ImagesController {
  constructor() {
    console.log('🖼️🎮');
    this.getImage()
    AppState.on('image', this.drawImage)
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error);
      Pop.toast("Couldn't get image", 'error')
    }
  }

  drawImage() {
    const image = AppState.image
    let imageHTML = image.imageTemplate
    setHTML('image', imageHTML)
    document.body.style.backgroundImage = `url(${image.url})`
  }
}
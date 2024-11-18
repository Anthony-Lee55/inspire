import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Image } from "../models/Images.js";


const imageApi = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/'
})

class ImagesService {

  async getImage() {
    const response = await imageApi.get('api/images')
    // console.log('🖼️📡', response.data);
    const image = new Image(response.data)
    AppState.image = image
  }
}

export const imagesService = new ImagesService()
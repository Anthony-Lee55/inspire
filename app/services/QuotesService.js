import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Quote } from "../models/Quotes.js";
import { api } from "./AxiosService.js";

const quoteApi = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/'
})

class QuotesService {

  async getQuote() {
    const response = await api.get('api/quotes')
    console.log('🔤📡', response.data);
    const quote = new Quote(response.data)
    AppState.quote = quote
  }
}

export const quotesService = new QuotesService()
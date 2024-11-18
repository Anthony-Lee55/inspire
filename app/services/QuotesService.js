import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Quote } from "../models/Quotes.js";

const quoteApi = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/'
})

class QuotesService {

  async getQuote() {
    const response = await quoteApi.get('api/quotes')
    console.log('🔤📡', response.data);
    const quote = new Quote(response.data)
    AppState.quote = quote
  }
}

export const quotesService = new QuotesService()
import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class QuotesController {
  constructor() {
    console.log('🔤🎮');
    this.getQuote()
    AppState.on('quote', this.drawQuote)
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error);
      Pop.toast("Couldn't get quote", 'error')
    }
  }

  drawQuote() {
    const quote = AppState.quote
    let quoteHTML = quote.quoteTemplate
    setHTML('quote', quoteHTML)
  }
}
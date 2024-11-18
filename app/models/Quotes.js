

export class Quote {
  constructor(data) {
    this.author = data.author
    this.quote = data.quote
  }

  get quoteTemplate() {
    return `
    <div id="quote" class="col-md-8 justify-content-center">
        <p>"${this.quote}"</p>
        <p class="text-end">${this.author}</p>
    </div>
    `
  }
}
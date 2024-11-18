

export class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.query = data.query
    this.author = data.author
  }

  get imageTemplate() {
    return `
            <p class="text-capitalize">${this.author}</p>
    `
  }
}
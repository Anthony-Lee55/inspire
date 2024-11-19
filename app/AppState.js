import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Quote } from './models/Quotes.js'
import { Weather } from './models/Weather.js'
import { Todo } from './models/Todos.js'

class ObservableAppState extends EventEmitter {

  /**@type {Image}*/
  image = null

  /**@type {Weather}*/
  weather = null

  /**@type {Quote}*/
  quote = null

  /**@type {Todo[]}*/
  todo = []

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())
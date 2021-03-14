import { store } from '@risingstack/react-easy-state'
import { Word } from './api'

type State = {
  words: Word[]
}

export const wordsStore = store<State>({ words: [] })

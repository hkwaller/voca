import { wordsStore } from './store'

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'b8pcbgr5',
  dataset: 'production',
  token:
    'skcfcL2YonEvLjNtBFgJhZnVzO7ikBn2MheubmQwk4hxwWuhhQs3V7SYzr3ZFDMpw2BhwFKfQoVavBCuDLqvWyN7QycVQ5gzf9ufWzUguswpubza1Wo2keeCknbIHWNaaG6wHA6XWPb6TWHF2kpeAZ7sAqXwmnUHdShMadJhZd8D9gmpxZGp', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
})

export type Word = {
  _id: string
  word: string
  date: Date
}

export async function getWords() {
  const query = '*[_type == "word"]'

  return client.fetch(query).then((words: Word[]) => {
    wordsStore.words = words
  })
}

export async function createWord(word: string, date: Date) {
  const doc = {
    _type: 'word',
    word: word,
    date: date,
  }

  client.create(doc).then((res: Word) => {
    console.log(`Word was created, document ID is ${res._id}`)
    wordsStore.words.push(res)
  })
}

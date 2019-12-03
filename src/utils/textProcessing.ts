import stopword from 'stopword'
const { stem } = require('porter-stemmer-indonesia')

/**
  * Text processing stage
  *
  * Case folding
  * @desc convert strings to lowercase letters
  * @function textToLowerCase
  *
  * Tokenizing
  * @desc split strings into arrays based on spaces
  * @function tokenizing
  *
  * Filtering
  * @desc remove all stopwords in strings
  * @function stopwordRemoval
  *
  * Stemming
  * @desc reduce words to their word stems
  * @function stemming
  */

/**
  * Get terms from document
  *
  * @params string of document
  * @return array of terms without duplicated word
  */
export default function (document: string): Array<string> {
  return Array.from(
    new Set(
      stemming(
        stopwordRemoval(
          tokenizing(
            textToLowerCase(
              document
            )
          )
        )
      )
    )
  )
}

/**
  * Case folding
  *
  * @params document words
  * @return new string after words are converted to lowercase letters
  */
function textToLowerCase (document: string): string {
  return document.toLowerCase()
}

/**
  * Tokenizing
  *
  * @params document words on lowercase letters
  * @return new splitted array of string sources from document word's param
  */
function tokenizing (document: string): Array<string> {
  return document
    .replace(/\s/g, ' ')
    .replace(/[^a-z0-9 ]/gi, '')
    .split(' ')
    .filter(term => term.trim() != '')
}

/**
  * Filtering
  *
  * @params array of string that returned after tokenizing
  * @return new array of string without stopwords
  */
function stopwordRemoval (words: Array<string>) {
  return stopword.removeStopwords(words, stopword.id)
}

/**
  * Stemming
  *
  * @params array of string that passed without stopword
  * @return new array of string that reduced to their word stems
  */
function stemming (words: Array<string>): Array<string> {
  return words.reduce((state: Array<string>, word) => ([
    ...state,
    stem(word)
  ]), [])
}

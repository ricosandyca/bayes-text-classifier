import { ITermValue } from './bagOfWords'

/**
  * Get probability every terms
  * Formula: https://basangdata.com/index.php/2019/01/19/klasifikasi-teks-dengan-naive-bayes/
  *
  * @params array of bagOfWords each class
  * @return probability value each word in all class documents
  *
  */

export default function (bagofwords: ITermValue[]): ITermValue[] {
  const allWords = bagofwords
    .reduce((state: string[], classTerms: ITermValue) => ([
      ...state,
      ...Object.keys(classTerms)
    ]), [])
  return bagofwords
    .reduce((state: ITermValue[], classTerms: ITermValue, classIndex: number) => ([
      ...state,
      allWords
        .reduce((state: ITermValue, key: string) => ({
          ...state,
          [key]: (
            ((bagofwords[classIndex][key] || 0) + 1) /
            (Object.keys(classTerms).length + allWords.length)
          )
        }), {})
    ]), [])
}

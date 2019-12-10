export interface ITermValue {
  [term: string]: number
}

/**
  * Get bag of words
  *
  * @params array of terms every documents each class
  * @return array of object(term: value) that implemented by terms each class
  */
export default function (...classDocuments: string[][][]): ITermValue[] {
  return classDocuments.reduce((state: ITermValue[], documents: string[][]) => ([
    ...state,
    documents.reduce((state: ITermValue, terms: string[]) => ({
      ...state,
      ...terms.reduce((state: ITermValue, term: string) => ({
        ...state,
        [term]: terms.filter((_term: string) => _term === term).length
      }), {})
    }), {})
  ]), [])
}

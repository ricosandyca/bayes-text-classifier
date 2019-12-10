import { IResolvers, ApolloError } from 'apollo-server-express'

import { textProcessing, bagOfWords, wordProbability } from '../../utils'
import {
  Category as CategoryServices,
  Document as DocumentServices
} from './services'

const MainResolvers: IResolvers = {
  Query: {
    async classify (_, { document }) {
      try {
        // get all data according by categories
        const categories: any = await CategoryServices.getAll()
        let categoryDocuments: string[][] = []
        for (const { _id: categoryId } of categories) {
          const documents: any = await DocumentServices.getAllFilter({ category: categoryId })
          const documentsContent = documents.reduce((state: string[], document: any) => ([
            ...state,
            document.content
          ]), [])
          categoryDocuments.push(documentsContent)
        }

        // get class probabilities from database according by category
        const classDocumentTerms = categoryDocuments.reduce((state: string[][][], documents) => ([
          ...state,
          documents.reduce((state: string[][], document: string) => ([
            ...state,
            textProcessing(document)
          ]), [])
        ]), [])
        const bagWords = bagOfWords(...classDocumentTerms)
        const probabilities = wordProbability(bagWords)

        // document test processing
        const terms = textProcessing(document)
        const probabilityClass = probabilities.reduce((state: number[], _, i: number) => ([
          ...state,
          terms.reduce((state: number, term: string) => (
            state * (probabilities[i][term] || 1)
          ), (
            categoryDocuments[i].length /
            categoryDocuments.reduce((state: number, documents: string[]) => (
              state + documents.length
            ), 0)
          ))
        ]), [])

        // select best category
        const categoryIndex = probabilityClass.reduce((state: number, value: number, i: number) => (
          probabilityClass[state] <= value
            ? i
            : state
        ), 0)

        return categories[categoryIndex]
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    }
  }
}

export default MainResolvers

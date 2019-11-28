import { IResolvers, ApolloError } from 'apollo-server-express'

import {
  Category as CategoryServices,
  Document as DocumentServices
} from './services'

const DocumentResolvers: IResolvers = {
  Document: {
    async category ({ category: categoryId }) {
      try {
        const category = await CategoryServices.getOne(categoryId)
        return category
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    }
  },
  Query: {
    async documents () {
      try {
        const documents = await DocumentServices.getAll()
        return documents
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    },
    async document (_, { _id: documentId }) {
      try {
        const document = await DocumentServices.getOne(documentId)
        return document
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    }
  },
  Mutation: {
    async createDocument (_, { data }) {
      try {
        const new_document = await DocumentServices.create(data)
        return new_document
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    },
    async updateDocument (_, { _id: documentId, data }) {
      try {
        const updated_document = await DocumentServices.update(documentId, data)
        if (!updated_document)
          throw { code: 404, message: 'Document not found' }
        else
          return updated_document
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    },
    async deleteDocument (_, { _id: documentId }) {
      try {
        const deleted_document = await DocumentServices.delete(documentId)
        if (!deleted_document)
          throw { code: 404, message: 'Document not found' }
        else
          return deleted_document
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    }
  }
}

export default DocumentResolvers

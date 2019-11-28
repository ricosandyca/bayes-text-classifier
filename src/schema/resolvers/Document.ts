import { IResolvers } from 'apollo-server-express'

const DocumentResolvers: IResolvers = {
  Document: {
    async category ({ category: categoryId }) {
      try {

      } catch (err) {

      }
    }
  },
  Query: {
    async documents () {
      try {

      } catch (err) {

      }
    },
    async document (_, { _id }) {
      try {

      } catch (err) {

      }
    }
  },
  Mutation: {
    async createDocument (_, { data }) {
      try {

      } catch (err) {

      }
    },
    async updateDocument (_, { _id, data }) {
      try {

      } catch (err) {

      }
    },
    async deleteDocument (_, { _id }) {
      try {

      } catch (err) {

      }
    }
  }
}

export default DocumentResolvers

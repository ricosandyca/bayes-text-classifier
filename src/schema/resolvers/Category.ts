import { IResolvers } from 'apollo-server-express'

const CategoryResolvers: IResolvers = {
  Query: {
    async categories () {
      try {

      } catch (err) {

      }
    },
    async category (_, { _id }) {
      try {

      } catch (err) {

      }
    }
  },
  Mutation: {
    async createCategory (_, { data }) {
      try {

      } catch (err) {

      }
    },
    async updateCategory (_, { _id, data }) {
      try {

      } catch (err) {

      }
    },
    async deleteCategory (_, { _id }) {
      try {

      } catch (err) {

      }
    }
  }
}

export default CategoryResolvers

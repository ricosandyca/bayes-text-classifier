import { IResolvers, ApolloError } from 'apollo-server-express'

import {
  Category as CategoryServices,
  Document as DocumentServices
} from './services'

const CategoryResolvers: IResolvers = {
  Category: {
    async documents ({ _id: categoryId }) {
      try {
        const documents = await DocumentServices.getAllFilter({ category: categoryId })
        return documents
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    }
  },
  Query: {
    async categories () {
      try {
        const categories = await CategoryServices.getAll()
        return categories
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    },
    async category (_, { _id: categoryId }) {
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
  Mutation: {
    async createCategory (_, { data }) {
      try {
        const new_category = await CategoryServices.create(data)
        return new_category
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    },
    async updateCategory (_, { _id: categoryId, data }) {
      try {
        const updated_category = await CategoryServices.update(categoryId, data)
        if (!updated_category)
          throw { code: 404, message: 'Category not found' }
        else
          return updated_category
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    },
    async deleteCategory (_, { _id: categoryId }) {
      try {
        const deleted_category = await CategoryServices.delete(categoryId)
        if (!deleted_category)
          throw { code: 404, message: 'Category not found' }
        else
          return deleted_category
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    }
  }
}

export default CategoryResolvers

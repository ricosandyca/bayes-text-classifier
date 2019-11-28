import { IResolvers, ApolloError } from 'apollo-server-express'

const MainResolvers: IResolvers = {
  Query: {
    async classify (_, { document }) {
      try {
        return { name: document }
      } catch (err) {
        const code = err.code || 500
        const message = err.message || 'Internal server error'
        return new ApolloError(message, code)
      }
    }
  }
}

export default MainResolvers

import { IResolvers } from 'apollo-server-express'

import Document from './Document'
import Category from './Category'

const resolvers: Array<any> = [Document, Category]

export default resolvers.reduce((state: IResolvers, value) => ({
  ...state, ...value,
  Query: { ...state.Query, ...value.Query },
  Mutation: { ...state.Mutation, ...value.Mutation }
}), { })

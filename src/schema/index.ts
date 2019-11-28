import { makeExecutableSchema } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import path from 'path'

import resolvers from './resolvers'
const typeDefs = importSchema(path.join(__dirname, '..', '..', 'graphql', 'Schema.graphql'))

export default makeExecutableSchema({ typeDefs, resolvers })

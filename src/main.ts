import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'

import * as config from './config'
import schema from './schema'

const app = express()
const { port: PORT } = config.app
const { uri: DBUri, options: DBOptions } = config.database

mongoose
  .connect(DBUri, DBOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(console.log)

const GraphQLServer = new ApolloServer({ schema })
GraphQLServer.applyMiddleware({ app, path: '/graphql' })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => console.log('Server running on port', PORT))

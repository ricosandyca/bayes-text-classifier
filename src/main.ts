import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import * as config from './config'

const app = express()
const { port: PORT } = config.app
const { uri: DBUri, options: DBOptions } = config.database

mongoose
  .connect(DBUri, DBOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(console.log)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => console.log('Server running on port', PORT))

import { ConnectionOptions } from 'mongoose'

interface IDatabase {
  uri: string
  options: ConnectionOptions
}

const database: IDatabase = {
  uri: process.env.DATABASE_URI || 'mongodb://localhost/bayes-classifier',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
}

export default database

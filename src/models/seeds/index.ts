import mongoose from 'mongoose'

import { database } from '../../config'
import CategorySeeder from './Category'
import DocumentSeeder from './Document'

const {
  uri: DBUri,
  options: DBOptions
} = database

mongoose
  .connect(DBUri, DBOptions)
  .then(() => {
    console.log('Connected to MongoDB')
    main()
  })
  .catch(console.log)

function main () {
  Promise.all([
    CategorySeeder(),
    DocumentSeeder()
  ])
    .then(() => {
      console.log('Seeder successfully')
    })
    .catch(console.log)
}

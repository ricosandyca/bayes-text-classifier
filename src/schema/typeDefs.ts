import { importSchema } from 'graphql-import'
import path from 'path'

export default importSchema(path.join(__dirname, '..', '..', 'graphql', 'Schema.graphql'))

import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose'
import { Category as ICategory } from './Category'

@modelOptions({ schemaOptions: {
  collection: 'documents',
  timestamps: true
}})
export class Document {
  @prop() content!: string
  @prop({ required: true, ref: 'categories' }) category!: Ref<ICategory>
}

export default getModelForClass(Document)

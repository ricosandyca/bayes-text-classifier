import { modelOptions, prop, getModelForClass, pre } from '@typegoose/typegoose'
import Document from './Document'

@pre<Category>('findOneAndRemove', async function () {
  const { _id } = this.getQuery()
  await Document.deleteMany({ category: _id })
})
@modelOptions({ schemaOptions: {
  collection: 'categories',
  timestamps: true
}})
export class Category {
  @prop({ required: true, unique: true }) name!: string
}

export default getModelForClass(Category)

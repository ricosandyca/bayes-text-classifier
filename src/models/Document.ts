import { pre, prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose'
import Category, { Category as ICategory } from './Category'

@pre<Document>('save', async function (next) {
  const { category } = this
  if (!await Category.findById(category))
    next(new Error('Category not found'))
})
@modelOptions({ schemaOptions: {
  collection: 'documents',
  timestamps: true
}})
export class Document {
  @prop() content!: string
  @prop({ required: true, ref: 'categories' }) category!: Ref<ICategory>
}

export default getModelForClass(Document)

import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: {
  collection: 'categories',
  timestamps: true
}})
export class Category {
  @prop({ required: true, unique: true }) name!: string
}

export default getModelForClass(Category)

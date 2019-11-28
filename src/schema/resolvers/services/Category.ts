import Category, { Category as ICategory } from '../../../models/Category'

export default {

  getAll: () => (
    new Promise((resolve, reject) => {
      Category.find({})
        .then(resolve)
        .catch(reject)
    })
  ),

  getOne: (id: string) => (
    new Promise((resolve, reject) => {
      Category.findById(id)
        .then(resolve)
        .catch(reject)
    })
  ),

  create: (data: ICategory) => (
    new Promise((resolve, reject) => {
      const new_data = new Category(data)
      new_data.save()
        .then(resolve)
        .catch(reject)
    })
  ),

  update: (id: string, data: ICategory) => (
    new Promise((resolve, reject) => {
      Category.findByIdAndUpdate(id, data, { new: true })
        .then(resolve)
        .catch(reject)
    })
  ),

  delete: (id: string) => (
    new Promise((resolve, reject) => {
      Category.findByIdAndRemove(id)
        .then(resolve)
        .catch(reject)
    })
  )

}

import Document, { Document as IDocument } from '../../../models/Document'

export default {

  getAll: () => (
    new Promise((resolve, reject) => {
      Document.find({})
        .then(resolve)
        .catch(reject)
    })
  ),

  getOne: (id: string) => (
    new Promise((resolve, reject) => {
      Document.findById(id)
        .then(resolve)
        .catch(reject)
    })
  ),

  getAllFilter: (query: object) => (
    new Promise((resolve, reject) => {
      Document.find(query)
        .then(resolve)
        .catch(reject)
    })
  ),

  create: (data: IDocument) => (
    new Promise((resolve, reject) => {
      const new_data = new Document(data)
      new_data.save()
        .then(resolve)
        .catch(reject)
    })
  ),

  update: (id: string, data: IDocument) => (
    new Promise((resolve, reject) => {
      Document.findByIdAndUpdate(id, data, { new: true })
        .then(resolve)
        .catch(reject)
    })
  ),

  delete: (id: string) => (
    new Promise((resolve, reject) => {
      Document.findByIdAndRemove(id)
        .then(resolve)
        .catch(reject)
    })
  )

}

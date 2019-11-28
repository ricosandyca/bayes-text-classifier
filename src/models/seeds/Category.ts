import Category, { Category as ICategory } from '../Category'

const data: Array<ICategory> = [
  { name: 'Sport' },
  { name: 'Food' },
  { name: 'Entertaiment' },
  { name: 'Tech' }
]

export default function () {
  return new Promise((resolve, reject) => {
    Category.insertMany(data)
      .then(resolve)
      .catch(reject)
  })
}

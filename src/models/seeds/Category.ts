import Category, { Category as ICategory } from '../Category'

const data: Array<ICategory> = [
  { name: 'Positif' },
  { name: 'Negatif' },
]

export default function () {
  return new Promise((resolve, reject) => {
    Category.insertMany(data)
      .then(resolve)
      .catch(reject)
  })
}

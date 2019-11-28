import { Types } from 'mongoose'
import Document, { Document as IDocument } from '../Document'

const { ObjectId } = Types

/**
  * Sport: 5ddfbb36976a1f08e4ef0424
  * Food: 5ddfbb36976a1f08e4ef0425
  * Entertaiment: 5ddfbb36976a1f08e4ef0426
  * Tech: 5ddfbb36976a1f08e4ef0427
  **/

const data: Array<IDocument> = [
  {
    content: 'Sport: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ObjectId('5ddfbb36976a1f08e4ef0424')
  },
  {
    content: 'Food: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ObjectId('5ddfbb36976a1f08e4ef0425')
  },
  {
    content: 'Entertaiment: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ObjectId('5ddfbb36976a1f08e4ef0426')
  },
  {
    content: 'Tech: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ObjectId('5ddfbb36976a1f08e4ef0427')
  },
]

export default function () {
  return new Promise((resolve, reject) => {
    Document.insertMany(data)
      .then(resolve)
      .catch(reject)
  })
}

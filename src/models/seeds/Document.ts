import { Types } from 'mongoose'
import Document, { Document as IDocument } from '../Document'

const { ObjectId } = Types

/**
  * Positif: 5de6709b62b3043c8d258d1f
  * Negatif: 5de6709b62b3043c8d258d20
  **/

const data: Array<IDocument> = [
  {
    content: 'barangnya bagus, respon penjual cepat',
    category: ObjectId('5de6709b62b3043c8d258d1f')
  },
  {
    content: 'top seller',
    category: ObjectId('5de6709b62b3043c8d258d1f')
  },
  {
    content: 'biarkan bintang berbicara',
    category: ObjectId('5de6709b62b3043c8d258d1f')
  },
  {
    content: 'pesan minggu senin sampe',
    category: ObjectId('5de6709b62b3043c8d258d1f')
  },
  {
    content: 'sesuai espektasi',
    category: ObjectId('5de6709b62b3043c8d258d1f')
  },
  {
    content: 'terimakasih barang sudah sampai dengan selamat',
    category: ObjectId('5de6709b62b3043c8d258d1f')
  },
  {
    content: 'produk sesuai deskripsi, makasih',
    category: ObjectId('5de6709b62b3043c8d258d1f')
  },
  {
    content: 'mengecewakan penyok ujungnya',
    category: ObjectId('5de6709b62b3043c8d258d20')
  },
  {
    content: 'ternyata rapuh sekali, nyesel dah beli 2',
    category: ObjectId('5de6709b62b3043c8d258d20')
  },
  {
    content: 'pesen warna merah yang datang biru bukan merah',
    category: ObjectId('5de6709b62b3043c8d258d20')
  }
]

export default function () {
  return new Promise((resolve, reject) => {
    Document.insertMany(data)
      .then(resolve)
      .catch(reject)
  })
}

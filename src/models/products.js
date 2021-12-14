import mongoose from 'mongoose'

const productsCollection = 'products'
const productsSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  precio: { type: Number, require: true },
  stock: { type: Number, require: true },
  url: { type:String, require: true },
})
export default mongoose.model(productsCollection, productsSchema)
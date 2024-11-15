const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = "mongodb+srv://songzj:eubPPLzCkJdHuBT3@cluster0.c8yrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Product', productSchema)
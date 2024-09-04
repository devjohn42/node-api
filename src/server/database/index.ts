import mongoose from 'mongoose'

let isConnected = false

const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDb is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'node-api',
    })

    isConnected = true
    console.log('mongodb connected')
  } catch (error) {
    console.error('Error to connect to mongodb', error)
    process.exit(1)
  }
}

export { connectToDB }

import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import User from '../models/user.js'


const seedDatabase = async () => {
  try {
    // connect to db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🐶🐱 DB connected in seeds')

		const products = await Product.create(productWithOwner)
    console.log(`🌱 DB seeded with ${products.length} products & ${user.length} users`)


    // close the connection
    await mongoose.connection.close()
    console.log('👋🏼 bye felica')

  } catch (err) {
    console.log(err)
  }
}
seedDatabase()
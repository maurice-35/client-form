import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import User from '../models/user.js'
import userData from './data/users.js'

const seedDatabase = async () => {
	try {
		// connect to db 
		await
		mongoose.connect('mongodb://localhost/test-finer-v');
    console.log('🚨 Database connected in seeds')
		
// drop db 
		await mongoose.connection.db.dropDatabase()
		console.log('👍🏾 DB dropped')

	// create users using userData
	const users = await User.create(userData)
	console.log(`🍃 DB seeded with ${users .length} users`)

	// closing the connection
	await mongoose.connection.close()
	console.log('✋🏾 bye')

	} catch {
		console.log(err)
		console.log('🆘 Something went wrong')
		console.log('✋🏾 bye')
	}
}

seedDatabase()
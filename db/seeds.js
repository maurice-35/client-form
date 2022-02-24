import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

const seedDatabase = async () => {
	try {
		// connect to db 
		await
		mongoose.connect('mongodb://localhost/test-finer-v');
    console.log('🚨 Database connected in seeds')
		
// drop db 
		await mongoose.connection.db.dropDatabase()
		console.log('👍🏾 DB dropped')

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
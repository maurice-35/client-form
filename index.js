import express from 'express'
import mongoose from 'mongoose'
import User from './models/user.js'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'


const app = express();


const startServer = async () => {
  try {
		// connect to db
		await
		mongoose.connect('mongodb://localhost/test-finer-v');
    console.log('🚨 Database has connected successfully')
		
		// log request method and url.
		app.use((req, _res, next) => {
	console.log(`🏮 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
	next()
})

	app.use(express.json())  // converts request to json format

// middleware for router
	app.use(router)
	
	// establish server connection
	app.listen(port, () =>
    console.log(`🚀 Express is up and running on port ${port}`))

  } catch (err) {
    console.log(err);
    console.log("Something went wrong 🤔")
  }
}
startServer()

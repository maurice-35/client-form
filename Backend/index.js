import express from 'express'
import mongoose from 'mongoose'
// import User from './models/user.js'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'
import path from 'path'

const app = express();
const __dirname = path.resolve() 


const startServer = async () => {
  try {
		// connect to db
		await
		mongoose.connect('mongodb://localhost/test-finer-v');
    console.log('🚨 Database has connected successfully')
		// app.use(express.static(`${__dirname}/client/build`))
		
		// log request method and url.
		app.use((req, _res, next) => {
	console.log(`🏮 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
	next()
})

	app.use(express.json())  // converts request to json format

// middleware for router
	app.use('/api', router)
	// app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`))
	
	// establish server connection
	app.listen(port, () =>
    console.log(`🚀 Express is up and running on port ${port}`))

  } catch (err) {
    console.log(err);
    console.log("Something went wrong 🤔")
  }
}
startServer()

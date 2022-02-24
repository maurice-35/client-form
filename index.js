import express from 'express'
import mongoose from 'mongoose'
import userSchema from './models/user.js'


const app = express();
const port = 5000
const dbURI = 'mongodb://localhost/test-finer-v'  // name of data base or path.


// define the models
const User = mongoose.model('User', + userSchema)

// log request
app.use((req, _res, next) => {
	console.log(`🏮 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
	next()
})

// Index Route
app.get('/users', async (_req, res) => {
	const users = await User.find()
	console.log('USERS', users)
	return res.status(200).json(users)
})

const startServer = async () => {
  try {
		await
		mongoose.connect('mongodb://localhost/test-finer-v');
    console.log('🚨 Database has connected successfully')
		app.listen(port, () =>
      console.log(`🚀 Express is up and running on port ${port}`))

  } catch (err) {
    console.log(err);
    console.log("Something went wrong 🤔")
  }
}
startServer()

import express from 'express'
import mongoose from 'mongoose'


const app = express();
const port = 5000
const dbURI = 'mongodb://localhost/test-finer-v'  // name of data base or path.


const startServer = async () => {
  try {
		await
		mongoose.connect('mongodb://localhost/test-finer-v');
    console.log('🚨 Database has connected successfully')
		app.listen(port, () =>
      console.log(`🚀 Express is up and running on port ${port}`)
    )
  } catch (err) {
    console.log(err);
    console.log("Something went wrong 🤔")
  }
}
startServer()

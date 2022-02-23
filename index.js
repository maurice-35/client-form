import express from 'express'
import mongoose from 'mongoose'


const app = express();
const port = 5000
 



    // event listener
    app.listen(port, () =>
      console.log(`🚀 Express is up and running on port ${port}`)
    )
 

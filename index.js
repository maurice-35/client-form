import express from 'express'


const app = express()
const port = 5000

// logger
app.use((req, _res, next) => {
	console.log(`🏮 Incoming request: Method: ${req.method} URL: ${req.url}`)
	next()
})


app.listen(port, () =>
  console.log(`🚀 Express is up and running on port ${port}`)
)
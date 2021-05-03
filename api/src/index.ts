import express from 'express'
const connectDB = require('./config/db')

const app = express()

connectDB()
app.listen(3000,
  () => console.log('Listening at port: 3000')
)
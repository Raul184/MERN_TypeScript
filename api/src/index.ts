import express from 'express'
import './config/db'

const app = express()

app.listen(3000,
  () => console.log('Listening at port: 3000')
)
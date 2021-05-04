import express from 'express'
import './config/db'
import morgan from 'morgan'
import cors from 'cors'
import videoRoutes from './routes/Video'


const app = express()
app.listen(
  process.env.PORT || 4000,
  () => console.log(`Listening at port: ${process.env.PORT}`)
)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(videoRoutes)
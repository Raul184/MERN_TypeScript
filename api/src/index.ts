import express from 'express'
import './config/db'
import videoRoutes from './routes/Video'


const app = express()
app.listen(
  process.env.PORT || 4000,
  () => console.log(`Listening at port: ${process.env.PORT}`)
)

app.use(videoRoutes)
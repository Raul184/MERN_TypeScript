import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(__dirname, './config.env') });

(async () => {
  const uri: any = process.env.DATABASE
  const mongooseOptions: ConnectOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
  try {
    await mongoose.connect(uri, mongooseOptions);
    console.log('Mongo DB connected')
  }
  catch (error) {
    console.log(error.message);
  }
})()

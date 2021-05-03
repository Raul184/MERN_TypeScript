import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, './config.env') });

const connectDB = async () => {
  const uri: any = process.env.DATABASE
  try {
    await mongoose.connect(
      uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('Mongo DB connected')
  }
  catch (error) {
    console.log(error.message);
  }
}


module.exports = connectDB;
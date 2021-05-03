const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
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
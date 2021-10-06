const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})
  mongoose.connection.on('open', () => {
    console.log('MongoDB : Connected successfully');
  })
  mongoose.connection.on('error', (err) => {
    console.log(`MongoDB ERROR : ${err}`);
  })
}
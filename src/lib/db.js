const mongoose = require('mongoose')

function connect () {
  return mongoose.connect(process.env.URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}

module.exports = { connect }

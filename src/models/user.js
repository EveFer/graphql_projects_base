const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  address: {
    country: {
      type: String
    },
    street: {
      type: String
    }
  }
})

module.exports = model('Users', userSchema)

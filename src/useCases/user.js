const User = require('../models/user')

function create (userData) {
  return User.create(userData)
}

function getAll () {
  return User.find()
}

module.exports = {
  create,
  getAll
}

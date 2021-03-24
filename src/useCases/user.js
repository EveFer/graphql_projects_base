const User = require('../models/user')

function create (userData) {
    return userData
}

function getAll () {
    const users = [
        {
            name: 'Vero',
            lastName: 'Corona'
        },
        {
            name: 'Omar',
            lastName: 'Ariza',
            address: {
                country: 'México',
                street: 'Una calle ..'
            }
        },
        {
            name: 'Fernanda',
            lastName: 'Palacios'
        }
    ]
    return users
}

module.exports = {
    create,
    getAll
}
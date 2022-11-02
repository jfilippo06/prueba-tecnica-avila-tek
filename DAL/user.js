const User = require('../models/User')

const findAndCountAllUsers = async (limit,offset) =>  {
    const data = await User
    return data
}

module.exports = {
    findAndCountAllUsers,
}
const { findAndCountAllUsers } = require("../DAL/user")
const { nextPage, prevPage } = require("../helpers/paginationTools")

const userService = async (page,size) => {
    const limit = size ? +size : 10
    const offset = page ? page * limit : 0
    const data = await findAndCountAllUsers(limit,offset)
    // const { count: totalItems, rows: User } = data
    // const currentPage = page ? +page: 0
    // const totalPages = Math.ceil(totalItems / limit)
    // const next = nextPage('testimonials', currentPage, totalPages)
    // const prev = prevPage('testimonials', currentPage, totalPages)
    // return { totalItems, User, next, prev }
    return data
}

module.exports = {
    userService,
}
const { findAndCountAllUsers } = require("../DAL/user")
const { nextPage, prevPage } = require("../helpers/paginationTools")

const userService = async (limit,page) => {
    const options = {
        limit: parseInt(limit, 10) || 10,
        page: parseInt(page, 10) || 0,
    }
    const data = await findAndCountAllUsers(options)
    const { totalDocs: totalItems, docs: User } = data
    const currentPage = page ? +page: 0
    const totalPages = Math.ceil(totalItems / limit)
    const next = nextPage('user', currentPage, totalPages, limit)
    const prev = prevPage('user', currentPage, totalPages, limit)
    return { totalItems, User, next, prev }
}

module.exports = {
    userService,
}
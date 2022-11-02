const index = (req,res) => {
    res.render('index')
}

const register = (req,res) => {
    res.render('register')
}

const home = (req,res) => {
    res.render('home')
}

module.exports = {
    index,
    register,
    home
}
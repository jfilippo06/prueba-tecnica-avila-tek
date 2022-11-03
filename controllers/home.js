const index = (req,res) => {
    res.render('index')
}

const register = (req,res) => {
    res.render('register')
}

const home = (req,res) => {
    user = req.user
    res.render('home', {user});
}

module.exports = {
    index,
    register,
    home
}
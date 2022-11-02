const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.URI)
    .then(()=>{console.log('db conectada')})
    .catch(e=>{console.log('fallo la conexión: ' + e)})
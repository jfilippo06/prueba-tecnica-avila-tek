require('dotenv').config()

module.exports = {
    "development": {
        "database": {
            "url": process.env.URI,
        },
        "options": {
            "useNewUrlParser": true
        }
    },
    "test": {
        "database": {
            "url": process.env.URI,
        },
        "options": {
            "useNewUrlParser": true
        }
    },
    "production": {
        "database": {
            "protocol": "mongodb",
            "username": "root",
            "password": "password",
            "name": "database_production",
            "host": "localhost",
            "port": "",
        },
        "options": {
            "useNewUrlParser": true
        }
    },
}
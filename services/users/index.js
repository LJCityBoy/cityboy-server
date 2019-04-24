// const controller = require('../../controller/users')
const model = require('../model')
const m = model([
    'reg',
    'changeMess',
    'changePass'
],'users')

module.exports = {
    ...m,
} ;


    
const controller = require('../../controller/pages')
// const { success, failed } = require('../../helper/pojo')
const model = require('../model')
const m = model([
    'rec',
    'newest',
    'clas',
    'all',
],'pages')
module.exports = {
    ...m,
};
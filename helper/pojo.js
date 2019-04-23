const success = (result) => {
    return {
        crode: 200,
        value: result
    }
}

const failed = (error) => {
    return {
        code: 500,
        msg: error.message || '服务器异常'
    }
}

module.exports = {
    success,
    failed
}
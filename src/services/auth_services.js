require('dotenv').config()
const model = require('../model/users')
const { requestResponse } = require('../utils/index')

let response

const login = async ({ USERNAME, PASSWORD }) => {
    const data = await model.findOne({ USERNAME: USERNAME }, { _id: false }, { lean: true })
    if (data === null) {
        response = { ...requestResponse.unauthorized }
        response.message = 'USER TIDAK TERDAFTAR'
        return response
    }
    if (PASSWORD !== data.PASSWORD) {
        response = { ...requestResponse.unauthorized }
        response.message = 'PASSWORD ANDA SALAH'
        return response
    }
    const result = {
        ...requestResponse.success, data: {
            user: { ...data }
        }
    }
    return result
}

module.exports = {
    login
}
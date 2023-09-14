const model = require('../model/photo')
const { requestResponse } = require('../utils/index')

let response

const create = async (data) => {
    return await model.create(data)
}

const getAll = async (attributes) => {
    return await model.find({}, attributes, { _id: false }, { lean: false },)
}

const getById = async (attributes, condition) => {
    return model.findOne(condition, attributes)
}

const updateOne = async (condition, body) => {
    return model.updateOne(condition, body)
}

const deleteOne = (condition) => {
    return model.deleteOne(condition)
}

const getCount = (condition) => {
    return model.countDocuments(condition)
}

module.exports = {
    create,
    getAll,
    updateOne,
    getById,
    deleteOne,
    getCount
}
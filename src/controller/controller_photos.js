require('dotenv').config()
const service = require('../services/photos_services')
const logger = require('../utils/logger')
const { requestResponse } = require('../utils/index')
const { v4, validate: isUuid } = require("uuid");

let response

const create = async (req, res) => {
    try {
        req.body.ID = v4();
        const data = await service.create(req.body)
        response = { ...requestResponse.success, data }
    } catch (error) {
        logger.error(error)
        response = { ...requestResponse.server_error }
    }
    res.json(response)
}

const getAll = async (req, res) => {
    try {
        const data = await service.getAll()
        response = { ...requestResponse.success, data }
    } catch (error) {
        logger.error(error)
        response = { ...requestResponse.server_error }
    }
    res.json(response)
}

const getAllByUser = async (req, res) => {
    try {
        // const userID = req.params.id
        // console.log(userID)
        const data = await service.getAllByUser({ IDUSER: req.params.id })
        response = { ...requestResponse.success, data }
    } catch (error) {
        logger.error(error)
        response = { ...requestResponse.server_error }
    }
    res.json(response)
}

const getById = async (req, res) => {
    try {
        const data = await service.getById({ ID: req.params.id })
        response = { ...requestResponse.success, data }
    } catch (error) {
        logger.error(error)
        response = { ...requestResponse.server_error }
    }
    res.json(response)
}

const updateOne = async (req, res) => {
    try {
        const data = await service.updateOne({ IDUSER: req.params.id }, req.body)
        response = { ...requestResponse.success, data }
    } catch (error) {
        logger.error(error)
        response = { ...requestResponse.server_error }
    }
    res.json(response)
}

const deleteOne = async (req, res) => {
    try {
        const data = await service.deleteOne({ IDUSER: req.params.id })
        response = { ...requestResponse.success, data }
    } catch (error) {
        logger.error(error)
        response = { ...requestResponse.server_error }
    }
    res.json(response)
}

const getCount = async (req, res) => {
    try {
        const data = await service.getCount()
        response = { ...requestResponse.success, data }
    } catch (error) {
        logger.error(error)
        response = { ...requestResponse.server_error }
    }
    res.json(response)
}

module.exports = {
    create,
    getAll,
    getAllByUser,
    getById,
    updateOne,
    deleteOne,
    getCount
}
const mongoose = require('mongoose')
const collectionName = 'photo'

const schema = new mongoose.Schema(
    {
        ID: {
            type: String
        },
        TITLE: {
            type: String,
        },
        DESCRIPTION: {
            type: String
        },
        PHOTO: {
            type: String
        },
        USERS: {
            type: String
        },
        CREATED_AT: {
            type: Date,
            default: () => new Date()
        },
        UPDATED_AT: {
            type: Date,
            default: () => new Date()
        }
    }
)

module.exports = mongoose.model(collectionName, schema)
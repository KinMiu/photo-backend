const model = require('../model/photo')
const { requestResponse } = require('../utils/index')

let response

const create = async (data) => {
    return await model.create(data)
}

const getAll = async (attributes) => {
    return await model.find({}, attributes, { _id: false }, { lean: false },)
}

const getAllByUser = async ({ IDUSER }) => {
    // console.log(IDUSER)
    const checkUser = await model.find({ USERS: IDUSER });
    // console.log(checkUser)
    if (checkUser.length === 0) {
        response = { ...requestResponse.unauthorized };
        console.log("ID TIDAK TERDAFTAR");
        response.message = "ID Tidak terdaftar";
    }
    return model.aggregate([
        {
            $match: {
                $and: [{ USERS: IDUSER }],
            },
        },
        {
            $lookup: {
                from: "users",
                localField: "USERS",
                foreignField: "IDUSER",
                as: "USERS_DATA",
            },
        },
    ]);
};

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
    getAllByUser,
    updateOne,
    getById,
    deleteOne,
    getCount
}
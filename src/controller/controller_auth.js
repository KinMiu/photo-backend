const service = require('../services/auth_services')
const { requestResponse } = require('../utils/index')
const logger = require('../utils/logger')

let response

const login = async (req, res) => {
	let loginResponse
	try {
		const { USERNAME, PASSWORD } = req.body
		loginResponse = await service.login({ USERNAME, PASSWORD })
		response = { loginResponse }
	} catch (error) {
		logger.error(error)
		response = { ...requestResponse.server_error }
	}
	res.json(response)
}

module.exports = {
	login
}
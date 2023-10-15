const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const Network = require('../../models/networks')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addNetworks = async (req, res) => {
    try {
        req = matchedData(req)
        const response = await Network.create(req)
        if (response) {
            res.status(200).json({
                success: true,
                result: response,
                message: 'Network Added Successfully'
            })
        } else {
            res.status(400).json({
                success: true,
                result: null,
                message: 'SomeThing Went Wrong'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { addNetworks }
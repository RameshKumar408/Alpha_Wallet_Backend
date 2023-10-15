const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const wallet = require('../../models/wallet')
const address = require('../../models/address')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addNetworks = async (req, res) => {
    try {
        res.status(400).json({
            success: true,
            message: 'No Wallets Found'
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { addNetworks }
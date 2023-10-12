const assets = require('../../models/assets')
const address = require('../../models/address')
const { getBalance } = require('../../middleware/web3')

const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getgascontroller = async (req, res) => {
    try {
        
res.status(200).json({
    success: true,
    result: req.baseFee,
    message: "Address found sucessfully"
})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getgascontroller }

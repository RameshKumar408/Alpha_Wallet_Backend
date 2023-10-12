const assets = require('../../models/assets')

const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addAssets = async (req, res) => {
    try {
        console.log(req.body)
        await assets.create(req.body)
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { addAssets }

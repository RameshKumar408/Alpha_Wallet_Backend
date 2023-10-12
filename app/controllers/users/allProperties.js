const property = require('../../models/property')

const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const allProperties = async (req, res) => {
    try {
        const query = await checkQueryString(req.query)
        const response = await getItems(req, property, query)
        if (response) {
            res.status(200).json({
                success: true,
                result: response,
                message: 'ALL PROPERTIES FETCHED SUCCESSFULLY'
            })
        } else {
            res.status(404).json({
                success: false,
                result: null,
                message: 'NO DATA FOUND'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { allProperties }

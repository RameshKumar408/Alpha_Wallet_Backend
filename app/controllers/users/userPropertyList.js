const property = require('../../models/property')

const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')
const { listInitOptions } = require('../../middleware/db/listInitOptions')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const userPropertyList = async (req, res) => {
    try {
        // const query = await checkQueryString(req.query)
        // const id = req.user.wadress

        // query.Current_Owner = req.user._id
        // const response = await getItems(req, property, query)
        const query = property.find({ Current_Owner: req.user._id }).populate('City')
        const options = await listInitOptions(req)
        const response = await property.paginate(query, options)
        if (response) {
            res.status(200).json({
                success: true,
                result: response,
                message: 'FETCH SUCCESSFULLY'
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

module.exports = { userPropertyList }

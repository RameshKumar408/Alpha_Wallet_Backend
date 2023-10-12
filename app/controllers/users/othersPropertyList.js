const property = require('../../models/property')

const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')
const { listInitOptions } = require('../../middleware/db/listInitOptions')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const othersPropertyList = async (req, res) => {
    try {
        // const query = await checkQueryString(req.query)
        // const id = req.user.wadress
        const query = property.find({ Current_Owner: { $ne: req.user._id } }).populate('City')
        // query.Current_Owner = { $ne: req.user._id } 
        const options = await listInitOptions(req)

        // const response = await getItems(req, property, query)
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
                message: 'No Data Found'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { othersPropertyList }

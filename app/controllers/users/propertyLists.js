const property = require('../../models/property')

const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')
const { listInitOptions } = require('../../middleware/db/listInitOptions')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const propertyLists = async (req, res) => {
    try {
        const options = await listInitOptions(req)
        const query = property.find().lean().populate('Current_Owner', {
            _id: 1,
            Email_Address: 1,
            Phone_NO: 1,
            Last_Name: 1,
            First_Name: 1
        })
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
                message: 'PROPERTIES NOT FOUND'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { propertyLists }

// const address = require('../../models/address')
const { handleError } = require('../../middleware/utils')
const property = require('../../models/property')
const { listInitOptions } = require('../../middleware/db/listInitOptions')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const propertiesList = async (req, res) => {
    try {
        // const query = await checkQueryString(req.query)
        if (!req.body.user_id) {
            res.status(404).json({
                success: false,
                result: null,
                message: 'Please Enter User id'
            })
        }
        const query = property
            .find({ Current_Owner: req.body.user_id })
            .populate('Current_Owner', {
                _id: 1,
                Email_Address: 1,
                Phone_NO: 1,
                Last_Name: 1,
                First_Name: 1
            })
        const options = await listInitOptions(req)
        // const response = await getItems(req, property, query)
        const response = await property.paginate(query, options)
        res.status(200).json({
            success: true,
            result: response,
            message: 'Properties Fetch Successfully'
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { propertiesList }

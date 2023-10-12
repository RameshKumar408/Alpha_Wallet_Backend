
// const profile = require("../../models/profile")
const profile = require("../../models/profile")
const { handleError } = require('../../middleware/utils')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 * 
 *
 */
const getKycDetails = async (req, res) => {
    try {
        const data = await profile.findOne({ userid: req.user._id })
        if (data) {
            res.status(200).json({
                success: true,
                result: data,
                message: 'FETCH SUCCESSFULLY'
            })
        } else {
            res.status(404).json({
                success: false,
                result: null,
                message: 'KYC DETAIL NOT FOUND'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getKycDetails }

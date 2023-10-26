const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const Network = require('../../models/networks')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getNetwork = async (req, res) => {
    try {
        // req = matchedData(req)
        const already = await User.findById({ _id: req.user._id }).populate('Networks')
        if (already) {
            res.status(200).json({
                success: true,
                result: already,
                message: 'Networks List'
            })
        } else {
            res.status(400).json({
                success: false,
                result: [],
                message: 'Network Not Available'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getNetwork }
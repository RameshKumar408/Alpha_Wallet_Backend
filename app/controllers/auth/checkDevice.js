const User = require('../../models/user')
const { isIDGood, handleError } = require('../../middleware/utils')


/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const checkDevice = async (req, res) => {
    try {
        const wallet_id = await User.findOne({ deviceid: req.body.deviceid })

        if (wallet_id) {
            res.status(200).json({
                success: true,
                result: wallet_id,
                message: 'DEVICE ID FOUND'
            })
        } else {
            res.status(200).json({
                success: false,
                result: null,
                message: 'DEVICE ID NOT FOUND'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { checkDevice }
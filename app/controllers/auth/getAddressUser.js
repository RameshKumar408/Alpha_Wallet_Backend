const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { getAddress } = require("./helpers/getAddress")
const wallet = require('../../models/wallet')
const address = require('../../models/address')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAddressUser = async (req, res) => {
    try {
        const wallet_id = await wallet.findOne({ userid: { $in: req.user._id } })
        const address1 = await address.find({ Daddress: wallet_id._id }, 'address Label isdefaultacc')
        if (address1[0]) {
            res.status(200).json({
                success: true,
                result: address1,
                message: 'User Phrase Verified successfully'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'No Wallets Found'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAddressUser }
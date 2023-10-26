// const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const Network = require('../../models/tradePairs')
const Users = require('../../models/user')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addCoins = async (req, res) => {
    try {
        data = matchedData(req)
        const already = await Network.findOne({ Address: data.Address, Network_id: data.Network_id })
        if (already) {
            const netaleady = await Users.findOne({ Coins: { $in: [already._id] } })
            if (netaleady === null) {
                await Users.findByIdAndUpdate({ _id: req.user._id }, { "$push": { Coins: already._id } })
            }
            res.status(200).json({
                success: true,
                result: null,
                message: 'Aleady Coins Added'
            })
        } else {
            const response = await Network.create(data)
            const netaleady = await Users.findOne({ Coins: { $in: [response._id] } })
            if (netaleady === null) {
                await Users.findByIdAndUpdate({ _id: req.user._id }, { "$push": { Coins: response._id } })
            }
            if (response) {
                res.status(200).json({
                    success: true,
                    result: response,
                    message: 'Coins Added Successfully'
                })
            } else {
                res.status(400).json({
                    success: true,
                    result: null,
                    message: 'SomeThing Went Wrong'
                })
            }
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { addCoins }
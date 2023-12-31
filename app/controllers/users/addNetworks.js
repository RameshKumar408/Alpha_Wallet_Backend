const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const Network = require('../../models/networks')
const Users = require('../../models/user')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addNetworks = async (req, res) => {
    try {
        data = matchedData(req)
        const already = await Network.findOne({ Chain_id: data.Chain_id })
        if (already) {
            const netaleady = await Users.findOne({ Networks: { $in: [already._id] } })
            if (netaleady === null) {
                await Users.findByIdAndUpdate({ _id: req.user._id }, { "$push": { Networks: already._id } })
            }
            res.status(200).json({
                success: true,
                result: null,
                message: 'Aleady Network Added'
            })
        } else {
            const response = await Network.create(data)
            const netaleady = await Users.findOne({ Networks: { $in: [response._id] } })
            if (netaleady === null) {
                await Users.findByIdAndUpdate({ _id: req.user._id }, { "$push": { Networks: response._id } })
            }
            if (response) {
                res.status(200).json({
                    success: true,
                    result: response,
                    message: 'Network Added Successfully'
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

module.exports = { addNetworks }
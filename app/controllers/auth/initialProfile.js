/* eslint-disable max-statements */
const { matchedData } = require('express-validator')

const { handleError } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const userProfile = require('../../models/user')
const wallet = require('../../models/wallet')

/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const initialProfile = async (req, res) => {
    try {
        // const data = matchedData(req)
        req.body.User_Id = req.user._id
        const already = await userProfile.find({ _id: req.user._id })
        const dt = []
        if (already[0].First_Name) {
            res.status(404).json({
                success: false,
                result: null,
                message: 'Username already exist'
            })
        } else {
            const datas = await userProfile.findOneAndUpdate({ _id: req.user._id }, req.body)
            res.status(200).json({
                success: true,
                result: req.body,
                message: 'Profile Created Successfully'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}
module.exports = { initialProfile }

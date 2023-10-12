const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { updateItem } = require('../../middleware/db')
const { emailExistsExcludingMyself } = require('../../middleware/emailer')
const multer = require('multer')
const uploadMiddleware = require('../../middleware/upload/uploadLocal')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const uploadImage = async (req, res) => {
    try {

        if (req.file) {
            const data = req.file.filename
            const response = `${process.env.BACKEND_URL}/images/${data}`
            res.status(200).json({
                success: true,
                result: response,
                message: 'IMAGE UPLOADED SUCCESSFULLY'
            })
        } else {
            res.status(200).json({
                success: false,
                result: null,
                message: 'SOMETHING WENT WRONG'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { uploadImage }

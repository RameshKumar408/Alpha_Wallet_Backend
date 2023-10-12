
// const profile = require("../../models/profile")
const userprofile = require("../../models/user")

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const userProfile = async (req, res) => {
    try {
        const id = req.user._id
        const response = await userprofile.findOne({ _id: id }, 'First_Name Email_Address Phone_NO Last_Name Profile_Image')
        if (response.First_Name) {
            res.status(200).json({
                success: true,
                result: response,
                message: 'FETCH SUCCESSFULLY'
            })
        } else {
            res.status(404).json({
                success: false,
                result: null,
                message: 'PROFILE NOT FOUND'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { userProfile }

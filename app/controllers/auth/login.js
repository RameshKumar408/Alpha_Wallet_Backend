/* eslint-disable max-statements */
const { matchedData } = require('express-validator')

const {
  findUser,
  userIsBlocked,
  checkLoginAttemptsAndBlockExpires,
  passwordsDoNotMatch,
  saveLoginAttemptsToDB,
  saveUserAccessAndReturnToken,
  registerUser
} = require('./helpers')

const { handleError } = require('../../middleware/utils')
const { checkPassword } = require('../../middleware/auth')
const User = require('../../models/user')
const bcrypt = require('bcrypt')

/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const login = async (req, res) => {
  try {
    const data = matchedData(req)
    if (data.check === 'true') {
      const user = await findUser(data.deviceid)
      console.log(user, 'saf')
      if (user?.code === 404) {
        res.status(200).json({
          success: true,
          result: null,
          message: 'User Does Not Exist'
        })
      } else {
        const _id = user._id
        const datas = await User.findByIdAndUpdate(
          { _id },
          { password: bcrypt.hashSync(data.password, 5) }
        )
        const response = await saveUserAccessAndReturnToken(req, datas)
        res.status(200).json({
          success: true,
          result: response,
          message: 'Successfully Logged-in'
        })
      }
    } else {
      const user = await findUser(data.deviceid)
      if (user?.code !== 404) {
        await userIsBlocked(user)
        await checkLoginAttemptsAndBlockExpires(user)
        const isPasswordMatch = await checkPassword(data.password, user)
        if (!isPasswordMatch) {
          handleError(res, await passwordsDoNotMatch(user))
        } else {
          user.loginAttempts = 0
          await saveLoginAttemptsToDB(user)
          const response = await saveUserAccessAndReturnToken(req, user)
          res.status(200).json({
            success: true,
            result: response,
            message: 'Successfully Logged-in'
          })
        }
      } else {
        const item = await registerUser(data)
        const response = await saveUserAccessAndReturnToken(req, item)
        res.status(200).json({
          success: true,
          result: response,
          message: 'User Registered successfully'
        })
      }
    }
  } catch (error) {
    handleError(res, error)
  }
}
module.exports = { login }

const { matchedData } = require('express-validator')
const { findUser, saveForgotPassword } = require('./helpers')
const { handleError } = require('../../middleware/utils')
const { decrypt } = require('../../middleware/auth')
const { findphrase } = require('../auth/helpers')
const User = require('../../models/user')
const bcrypt = require('bcrypt')

/**
 * Forgot password function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
// eslint-disable-next-line max-statements
const forgotPassword = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    // const locale = req.getLocale()
    const data = matchedData(req)
    const usrpswd = await findUser(data.deviceid)
    const _id = usrpswd._id
    const sphrase = await findphrase(usrpswd._id)
    let dat = []
    dat = data.phrase.split(',')
    const flag = sphrase[0].phrase.length
    let flag1 = 0
    const dt = []
    for (let i = 0; i < sphrase[0].phrase.length; i++) {
      dt.push(decrypt(sphrase[0].phrase[i]))
    }
    for (let i = 0; i < dat.length; i++) {
      const cphrase = dt.indexOf(dat[i])
      if (cphrase === i) {
        flag1++
      } else {
        res.status(404).json({
          success: false,
          result: null,
          message: 'INCORRECT PHRASE, TRY AGAIN'
        })
      }
    }
    if (flag === flag1) {
      await saveForgotPassword(req)
      await User.findByIdAndUpdate(
        { _id },
        { password: bcrypt.hashSync(data.password, 5) }
      )
      res.status(200).json({
        success: true,
        result: null,
        message: 'PASSWORD UPDATED SUCESSFULLY'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { forgotPassword }

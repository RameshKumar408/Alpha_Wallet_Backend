const { blockIsExpired } = require('./blockIsExpired')
const { blockUser } = require('./blockUser')
const { blockAdmin } = require('./blockAdmin')
const {
  checkLoginAttemptsAndBlockExpires
} = require('./checkLoginAttemptsAndBlockExpires')
const { checkPermissions } = require('./checkPermissions')
const { checkAdminPermissions } = require('./checkAdminPermissions')
const { findForgotPassword } = require('./findForgotPassword')
const { findphrase } = require('./findphrase')
const { findavailablephrase } = require('./findavailablephrase')
const { findUser } = require('./findUser')
const { findAdmin } = require('./findAdmin')
const { findUserById } = require('./findUserById')
const { findAdminById } = require('./findAdminById')
const { findUserToResetPassword } = require('./findUserToResetPassword')
const { forgotPasswordResponse } = require('./forgotPasswordResponse')
const { generateToken } = require('./generateToken')
const { getUserIdFromToken } = require('./getUserIdFromToken')
const { markResetPasswordAsUsed } = require('./markResetPasswordAsUsed')
const { passwordsDoNotMatch } = require('./passwordsDoNotMatch')
const { registerUser } = require('./registerUser')
const { returnRegisterToken } = require('./returnRegisterToken')
const { saveForgotPassword } = require('./saveForgotPassword')
const { saveLoginAttemptsToDB } = require('./saveLoginAttemptsToDB')
const {
  saveUserAccessAndReturnToken
} = require('./saveUserAccessAndReturnToken')
const {
  saveAdminAccessAndReturnToken
} = require('./saveAdminAccessAndReturnToken')
const { setUserInfo } = require('./setUserInfo')
const { updatePassword } = require('./updatePassword')
const { userIsBlocked } = require('./userIsBlocked')
const { verificationExists } = require('./verificationExists')
const { verifyUser } = require('./verifyUser')
const { getAddress } = require('./getAddress')

module.exports = {
  blockIsExpired,
  blockUser,
  blockAdmin,
  checkLoginAttemptsAndBlockExpires,
  checkPermissions,
  checkAdminPermissions,
  findForgotPassword,
  findphrase,
  findavailablephrase,
  findUser,
  findAdmin,
  findUserById,
  findAdminById,
  findUserToResetPassword,
  forgotPasswordResponse,
  generateToken,
  getUserIdFromToken,
  markResetPasswordAsUsed,
  passwordsDoNotMatch,
  registerUser,
  returnRegisterToken,
  saveForgotPassword,
  saveLoginAttemptsToDB,
  saveUserAccessAndReturnToken,
  saveAdminAccessAndReturnToken,
  setUserInfo,
  updatePassword,
  userIsBlocked,
  verificationExists,
  verifyUser,
  getAddress
}

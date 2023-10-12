const { validateForgotPassword } = require('./validateForgotPassword')
const { validateLogin } = require('./validateLogin')
const { validateRegister } = require('./validateRegister')
const { validateResetPassword } = require('./validateResetPassword')
const { validateVerify } = require('./validateVerify')
const { adminvalidateLogin } = require('./adminvalidatelogin')
const { validateprofile } = require('./profilevalidae')
const { Bvalidateprofile } = require('./Bprofilevalidator')
const { propertyValidator } = require('./propertyValidator')
const { initailProfileValidator } = require('./initialprofileValidator')

module.exports = {
  validateForgotPassword,
  validateLogin,
  validateRegister,
  validateResetPassword,
  validateVerify,
  adminvalidateLogin,
  validateprofile,
  Bvalidateprofile,
  propertyValidator,
  initailProfileValidator
}

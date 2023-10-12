const { forgotPassword } = require('./forgotPassword')
const { getRefreshToken } = require('./getRefreshToken')
const { login } = require('./login')
const { loginByAdmin } = require('./loginByAdmin')
const { register } = require('./register')
const { resetPassword } = require('./resetPassword')
const { roleAuthorization } = require('./roleAuthorization')
const { verify } = require('./verify')
const { profile } = require('./profile')
const { Bprofile } = require('./Bprofile')
const { getAddressUser } = require('./getAddressUser')
const { initialProfile } = require('./initialProfile')
const { profileUpdate } = require('./profileUpdate')
const { checkDevice } = require('./checkDevice')
const { importwallet } = require('./importwallet')

module.exports = {
  forgotPassword,
  getRefreshToken,
  login,
  loginByAdmin,
  register,
  resetPassword,
  roleAuthorization,
  verify,
  profile,
  Bprofile,
  getAddressUser,
  initialProfile,
  profileUpdate,
  checkDevice,
  importwallet
}

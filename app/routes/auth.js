const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const {
  register,
  verify,
  forgotPassword,
  resetPassword,
  getRefreshToken,
  login,
  loginByAdmin,
  roleAuthorization,
  profile,
  Bprofile,
  getAddressUser,
  initialProfile,
  profileUpdate,
  checkDevice,
  importwallet
} = require('../controllers/auth')

const {
  validateRegister,
  validateVerify,
  validateForgotPassword,
  validateResetPassword,
  validateLogin,
  adminvalidateLogin,
  validateprofile,
  Bvalidateprofile,
  initailProfileValidator
} = require('../controllers/auth/validators')

/*
 * Auth routes
 */

/*
 * Register route
 */
router.post('/register', trimRequest.all, validateRegister, register)

/*
 * Verify route
 */
router.post('/verify', trimRequest.all, validateVerify, verify)

/*
 * Forgot password route
 */
router.post('/forgot', trimRequest.all, validateForgotPassword, forgotPassword)

/*
 * Reset password route
 */
router.post('/reset', trimRequest.all, validateResetPassword, resetPassword)

/*
 * Get new refresh token
 */
router.get(
  '/token',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getRefreshToken
)
router.post('/importwallet', trimRequest.all, importwallet)

/*
 * Login route
 */
router.post('/login', trimRequest.all, validateLogin, login)

router.post('/adminlogin', trimRequest.all, adminvalidateLogin, loginByAdmin)

router.post(
  '/Individualkyc',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateprofile,
  profile
)

router.post(
  '/Businesskyc',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  Bvalidateprofile,
  Bprofile
)

router.get(
  '/userwalletaddress',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  getAddressUser
)

router.post(
  '/createprofile',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  // initailProfileValidator,
  initialProfile
)

router.post(
  '/updateprofile',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  profileUpdate
)

router.post('/checkdevice', trimRequest.all, checkDevice)

module.exports = router

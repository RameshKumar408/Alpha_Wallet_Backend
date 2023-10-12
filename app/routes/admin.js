const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')
const { roleAuthorization } = require('../controllers/auth')

const {
    kycVerify,
    listItems,
    getUsers,
    kycLists,
    userAddress,
    propertiesList,
    blockUser,
    individualKyc,
    adminForgotPassword
} = require('../controllers/admin')
const { propertyValidator } = require('../controllers/auth/validators')

router.post(
    '/kycverify',
    requireAuth,
    roleAuthorization(['admin']),
    trimRequest.all,
    kycVerify
)

router.post(
    '/createproperty',
    requireAuth,
    roleAuthorization(['user', 'admin']),
    trimRequest.all,
    propertyValidator,
    listItems
)

router.get(
    '/userslist',
    requireAuth,
    roleAuthorization(['admin']),
    trimRequest.all,
    getUsers
)

// users kyc lists
router.get(
    '/kycslist',
    requireAuth,
    roleAuthorization(['admin']),
    trimRequest.all,
    kycLists
)

// single user address details
router.post(
    '/addressdetails',
    requireAuth,
    roleAuthorization(['admin']),
    userAddress
)

// single user properties list

router.post(
    '/propertieslist',
    requireAuth,
    roleAuthorization(['admin']),
    propertiesList
)

router.post(
    '/inidvidualkyc',
    requireAuth,
    roleAuthorization(['admin']),
    individualKyc
)

router.post(
    '/changepassword',
    requireAuth,
    roleAuthorization(['admin']),
    adminForgotPassword
)

router.get('/blockuser', blockUser)

module.exports = router

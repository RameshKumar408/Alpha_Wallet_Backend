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
    propertyLists,
    userPropertyList,
    userPropertyListCity,
    othersPropertyList,
    othersPropertyListCity,
    allProperties
} = require('../controllers/users')

router.get(
    '/list',
    requireAuth,
    roleAuthorization(['admin']),
    propertyLists
)

router.get(
    '/sellproperty',
    requireAuth,
    roleAuthorization(['user']),
    userPropertyList
)
router.post(
    '/sellpropertycity',
    requireAuth,
    roleAuthorization(['user', 'admin']),
    userPropertyListCity
)

router.get(
    '/buyproperty',
    requireAuth,
    roleAuthorization(['user']),
    othersPropertyList
)

router.post(
    '/buypropertycity',
    requireAuth,
    roleAuthorization(['user', 'admin']),
    othersPropertyListCity
)

router.get(
    '/allproperties',
    allProperties
)



module.exports = router

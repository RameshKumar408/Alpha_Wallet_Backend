const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const multer = require('multer')
const { getGasAmounts } = require('../middleware/web3/getgasAmountonly')
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  checksecretephrase,
  createaddress,
  walletimport,
  createphrase,
  uploadImage,
  userProfile,
  getKycDetails,
  amountTransfer,
  addAssets,
  getAssets,
  getgascontroller,
  addNetworks
} = require('../controllers/users')

const {
  validateCreateUser,
  validateGetUser,
  validateUpdateUser,
  validateDeleteUser,
  validateCreateAddress,
  validateTransfer,
  validateGetGasAmount,
  validateAddNetwork
} = require('../controllers/users/validators')

const storage = multer.diskStorage({
  destination: './public/images',
  filename(req, res, cb) {
    cb(null, `${res.fieldname}_${res.originalname}`)
  }
})
// const imageupload = multer({ storage })
// const whitelist = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']

const imageupload = multer({
  storage: multer.diskStorage({
    destination: './public/images',
    filename(req, res, cb) {
      cb(null, `${res.fieldname}_${res.originalname}`)
    }
  }),
  // fileFilter: (req, file, cb) => {
  //   console.log(file.mimetype, "daf")
  //   if (!whitelist.includes(file.mimetype)) {
  //     req.fileValidationError = 'Only png,jpeg,jpg,webp files are allowed!';
  //     // return cb(new Error('Only  files are allowed!'))
  //   }
  //   cb(null, true)
  // }
})

/*
 * Users routes
 */

/*
 * Get items route
 */
router.get(
  '/userslist',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  getUsers
)

/*
 ** check secret
 */
router.post(
  '/checksecretephrase',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  checksecretephrase
)

router.post(
  '/getGasAmount',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateGetGasAmount,
  getGasAmounts,
  getgascontroller
)

/*
 ** create address
 */
router.post(
  '/createaddress',
  requireAuth,
  roleAuthorization(['user']),
  validateCreateAddress,
  trimRequest.all,
  createaddress
)
/*
 ** create Phrase
 */
router.get(
  '/createphrase',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  createphrase
)

router.post(
  '/addNetworks',
  requireAuth,
  roleAuthorization(['user']),
  validateAddNetwork,
  trimRequest.all,
  addNetworks
)
/*
 * Import wallet
 */
router.post(
  '/walletimport',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  walletimport
)
/*
 * Create new item route
 */
router.post(
  '/create',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateCreateUser,
  createUser
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetUser,
  getUser
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateUser,
  updateUser
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteUser,
  deleteUser
)

/*
 ** list address
 */
router.get(
  '/list',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  createaddress
)

/*
 * upload image
 */
router.post(
  '/uploadimage',
  // requireAuth,
  // roleAuthorization(['user']),

  imageupload.single('image'),
  uploadImage
)

/*
 * user profile list
 */

router.post(
  '/getprofile',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  userProfile
)

router.post(
  '/getkycdetails',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  getKycDetails
)
/*
 * property oweners list
 */

router.post(
  '/coinTransfer',
  requireAuth,
  roleAuthorization(['user']),
  trimRequest.all,
  validateTransfer,
  amountTransfer
)

router.post(
  '/addAssets',
  addAssets

)

router.post(
  '/getAssets',
  requireAuth,
  roleAuthorization(['user']),
  getAssets

)
module.exports = router

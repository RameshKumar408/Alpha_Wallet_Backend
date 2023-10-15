const { createUser } = require('./createUser')
const { deleteUser } = require('./deleteUser')
const { getUser } = require('./getUser')
const { getUsers } = require('./getUsers')
const { updateUser } = require('./updateUser')
const { checksecretephrase } = require('./checksecretphrase')
const { createaddress } = require('./createaddress')
const { walletimport } = require('./walletimport')
const { createphrase } = require('./createphrase')
const { getAddressUser } = require('../auth/getAddressUser')
const { uploadImage } = require("./uploadImage")
const { userProfile } = require("./userProfile")
const { propertyLists } = require("./propertyLists")
const { userPropertyList } = require("./userPropertyList")
const { userPropertyListCity } = require("./userPropertyListCity")
const { othersPropertyList } = require("./othersPropertyList")
const { othersPropertyListCity } = require("./othersPropertyListCity")
const { getKycDetails } = require("./getKycDetails")
const { allProperties } = require("./allProperties")
const { amountTransfer } = require("./amountTransfer")
const { addAssets } = require("./addAsset")
const { getAssets } = require("./getAssets")
const { getgascontroller } = require("./getgasAmount")
const { addNetworks } = require('./addNetworks')

module.exports = {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  checksecretephrase,
  createaddress,
  walletimport,
  createphrase,
  getAddressUser,
  uploadImage,
  userProfile,
  propertyLists,
  userPropertyList,
  userPropertyListCity,
  othersPropertyList,
  othersPropertyListCity,
  getKycDetails,
  allProperties,
  amountTransfer,
  addAssets,
  getAssets,
  getgascontroller,
  addNetworks
}

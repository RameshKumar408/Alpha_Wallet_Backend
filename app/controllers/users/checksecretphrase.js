/* eslint-disable max-statements */
const { isIDGood, handleError } = require('../../middleware/utils')
const { findphrase } = require('../auth/helpers')
const { decrypt } = require('../../middleware/auth')
const Wallet = require('../../models/wallet')
const User = require('../../models/user')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const checksecretephrase = async (req, res) => {
  try {
    const userphrase = req.body
    
    if(userphrase.phrase){
      var secretlen = userphrase.phrase.split(" ")
    console.log(secretlen.length,"len")
    console.log(secretlen,"len")
      const _id = await isIDGood(req.user._id)
      const sphrase = await findphrase(_id)
      if (sphrase.length === 0) {
        res.status(400).json({
          success: false,
          result: null,
          message: 'Please Generate Secret Phrase (or) Incorrect Secret Phrase'
        })
      }
      else if(secretlen.length < 12 || secretlen.length > 12){
        res.status(400).json({
          success: false,
          result: null,
          message: 'Please Enter 12 Words PhraseKey'
        })
      } else {
        let dat = []
        dat = userphrase.phrase.split(' ')
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
            res.status(400).json({
              success: false,
              result: null,
              message: 'INVALID PHRASE, TRY AGAIN'
            })
          }
        }
        if (flag === flag1) {
          await Wallet.findByIdAndUpdate(sphrase[0]._id, {
            isverified: true
          })
          await User.findByIdAndUpdate(_id, { verified: true })
          res.status(200).json({
            success: true,
            result: null,
            message: 'PHRASE VERIFIED SUCCESSFULLY'
          })
        }
      }
    }else{
      res.status(400).json({
        success: true,
        result: null,
        message: 'Please Enter phrase'
      })
    }
   
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { checksecretephrase }

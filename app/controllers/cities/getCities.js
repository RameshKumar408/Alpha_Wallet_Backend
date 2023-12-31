const City = require('../../models/city')
const { checkQueryString, getItems } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCities = async (req, res) => {
  try {
    // const query = await checkQueryString(req.query)
    // const response = await getItems(req, City, query)
    const response = await City.find({});
    // console.log(response.docs.length)
    if (response.length > 0) {
      res.status(200).json({
        success: true,
        result: response,
        message: 'Cities Data Found'
      })
    } else {
      res.status(200).json({
        success: true,
        result: null,
        message: 'No Data Found'
      })
    }

  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCities }

const mongoose = require('mongoose')
const validator = require('validator')

const NetworksSchema = new mongoose.Schema(
    {
        Network_name: {
            type: String,
            required: true
        },
        Rpc__url: {
            type: String,
            required: true
        },
        Chain_id: {
            type: String,
            required: true
        },
        Currency_Symbol: {
            type: String,
            required: true
        },
        Block_Explore: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('networks', NetworksSchema)

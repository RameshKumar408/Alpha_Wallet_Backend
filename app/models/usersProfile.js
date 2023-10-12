const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const userProfile = new mongoose.Schema(
    {
        First_Name: {
            type: String,
            required: true
        },
        Last_Name: {
            type: String,
            required: true
        },
        Email_Address: {
            type: String,
            required: true
        },
        Phone_NO: {
            type: Number,
            required: true
        },
        User_Id: {
            type: mongoose.Schema.Types.ObjectId
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
userProfile.plugin(mongoosePaginate)
module.exports = mongoose.model('UsersProfile', userProfile)
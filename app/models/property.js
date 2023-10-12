const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const validator = require('validator')

const property = new mongoose.Schema(
    {
        Address: {
            type: String
        },
        title: {
            type: String
        },
        City: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'City'
        },
        State: {
            type: String
        },
        Zip: {
            type: Number,
        },
        Property_type: {
            type: String
        },
        Bedroom: {
            type: String
        },
        Bathroom: {
            type: String
        },
        Year_Build: {
            type: String
        },
        Square_Footage: {
            type: String
        },
        No_of_Garages: {
            type: String
        },
        Describe: {
            type: String
        },
        Sales_Price: {
            type: String
        },
        Earnest_Money: {
            type: String
        },
        Closing_Date: {
            type: String
        },
        Property_Image: {
            type: Array
        },
        Plan_Image: {
            type: String
        },
        Current_Occupant: {
            type: String,
        },
        Occupied_Since: {
            type: String
        },
        Lease_expiration_date: {
            type: String
        },
        Projected_rent_year: {
            type: String
        },
        Total_rent_last_year: {
            type: String
        },
        Survey_Document: {
            type: String
        },
        Owners_Details: {
            type: Array
        },
        List_on_MLS: {
            type: String,
            default: "false"
        },
        Virtual_Tour: {
            type: String,
            default: "false"
        },
        Owners_List: {
            type: Array
        },
        is_Visible: {
            type: Boolean,
            default: true
        },
        Current_Owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        Ad_Type: {
            type: String,
            default: "Sell"
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
property.plugin(mongoosePaginate)
module.exports = mongoose.model('property', property)
import mongoose from "mongoose";
import { officerSchema } from "./user.js";
const postSchema = mongoose.Schema({
    title: String,
    description: String,
    number: String,
    type: String,
    catagory: String,
    lotNo: String,
    creator: officerSchema,
    publishedDate: {
        type: Date,
        default: new Date()
    },
    closingDate: {
        type: Date,
        default: new Date()
    },
    bidOpenOn: {
        type: Date,
        default: new Date()
    },
    participationFee: String,
    bidSecurityAmount: String,
    termsAndConditions: String,
})
export default mongoose.model('postTender', postSchema)

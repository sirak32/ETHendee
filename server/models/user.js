import mongoose from 'mongoose'
import { accountSchema } from "./account.js";
const addressSchema = mongoose.Schema({
    city: String,
    subcity: String,
    wereda: String,
    kebele: String,
})
const userSchema = mongoose.Schema({
    firstName: String,
    middleNam: String,
    lastName: String,
    email: String,
    phoneNumber: {
        countryCode: String,
        regionalCode: String,
        number: String,
    },
    address: addressSchema,
    sex: String,



})
const officerSchema = mongoose.Schema({
    personalInfo: userSchema,
    officerId: String,

})
const supplierSchema = mongoose.Schema({
    personalInfo: userSchema,
    accountInfo: accountSchema,
    bussinesType: String,
    tinNumber: String,
})
const systemAdminSchema = mongoose.Schema({
    personalInfo: userSchema,
    adminId: String,
})
const names = ['address', 'user', 'officer', 'systemAdmin', 'supplier']
const address = mongoose.model('Address', addressSchema)
const user = mongoose.model('Users', userSchema)
const officer = mongoose.model('Officer', officerSchema)
const systemAdmin = mongoose.model('SystemAdmin', systemAdminSchema)
const supplier = mongoose.model('Supplier', supplierSchema)
export {
    user,
    address,
    officer,
    supplier,
    systemAdmin,
    officerSchema
}
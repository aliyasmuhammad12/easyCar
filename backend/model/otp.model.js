import mongoose from "mongoose";

const otpScheme = new mongoose.Schema({
    email:{
        type: String
    },
    otp:{
        type:String
    }
})
const Otp  = mongoose.model("otp", otpScheme)
export default Otp
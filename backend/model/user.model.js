import mongoose from "mongoose";

const userschema =new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    role:{
        type: String,
        enum: ['user', 'admin'], 
        default: 'user',
    }
})
const user =mongoose.model("users",userschema);
export default user;
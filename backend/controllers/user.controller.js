import User from "../model/user.model.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import crypto from "crypto";
import Otp from "../model/otp.model.js"
import user from "../model/user.model.js"
import { response } from "express";
// import Otp from "../model/Otp.model.js";


dotenv.config();
//registration api
export const register = async (req, res) => {
    try {
      const { email, name, password,role } = req.body;
      const existingUser  = await User.findOne({ email });
      // console.log(email)
      if (existingUser) {
        res.status(401).json({ message: "user already exist" });
      }
      const hashpassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        email,
        name,
        password: hashpassword,
        role,
      });
      await newUser.save();
      res.status(201).json({message:"user registration success",newUser});
    } catch (error) {
      console.error(error)
      res.status(500).json({ messsage: "error araha hai yr" });
    }
  };


  //Login api

  export const login = async (req, res) => {
    try {
      console.log("login");
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
       return res.status(404).json({ message: "user not found" });
      }
      const passwordMatch =await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ 
          message: "password don't matched" });
      }
  
      const token = jwt.sign(
        { userId: user.id, email: user.email, password: user.password,role: user.role },
        process.env.PRIVATE_KEY,
        { expiresIn: "2hr" }
      );
      res.status(200).json({
        message: "User Logged In",
        token: token,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //get all users

  export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      // console.log(users)
      if (!users) {
        res.status(404).json({ message: "users not found" });
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "nai chale ga" });
    }
  };

  // single user

  export const getSingleUser = async (req, res) => {
    try {
      const { id } = req.params;
      const singleUser = await User.findById(id);
      if (!singleUser) {
        return res.status(404).json({ message: "user not found" });
      }
      res.status(200).json(singleUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //update user
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "cant update" });
  }
};
  
  //delete user

export const deleteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "no user found" });
    }
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//forget password


export const forgetPassword = async(req,res)=>{
  try {
    const {email} = req.body;
    const user = await User.findOne({email})
    if(user){
      const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
          user:"aliyasmuhammad1122@gmail.com",
          pass:"msnd qprc agcg tjld",
        }
      })
      const otp = crypto.randomBytes(3).toString('hex');
      const mailOptions = {
        from : "aliyasmuhammad1122@gmail.com",
        to : email,
          subject: "password  reset OTP",
          text: `your OTP is ${otp}`,
        };
        transporter.sendMail(mailOptions);
        const otpsave = new Otp({
          email,otp,
        })
        await otpsave.save()
        res.status(200).json({message:"otp send successfully"})
    }
  } catch (error) {
    res.status(500).json({message:"otp faild to send"})
  }
}


//verify otp

export const verifyOtp = async (req,res)=>{
  try {
    const {email,otp,newPassword} = req.body
    const otpVerify = await Otp.findOne({email,otp})
    console.log(otpVerify)
    console.log(otp)
    if(!otpVerify){
      return res.status(400).json({message:"invalid otp"})
    }
    const hashpassword = await bcrypt.hash(newPassword,10);
    await user.updateOne({email},{$set:{password:hashpassword}});
    await Otp.deleteOne({email})
    res.status(200).json({message:"password changed successfully"})
  } catch (error) {
    res.status(500).json({message:"unable to change password"})
    
  }
}

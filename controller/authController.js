import User from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' 
import { generateotp } from "../utils/generator.js"
import { sendMail } from "../services/sendmail.js"
import Otp from "../models/otp.js"



//why we use User for register and product for(small p)

export const register= async (req,res) =>{
    try{
        const{fullname, email, password, phone} =req.body
        if(!email || !password || !fullname){
            return res.status(400).json({message: "some fields mmissing",})
        }
        const userExist= await User.find({email:email})
        if(userExist[0]){
         return res.status(400).json({message: "user  already exist",})   
        }

        const hashedPassword =bcrypt.hashSync(password, 9)

        const data= await User.create({
            email,
            fullname,
            password: hashedPassword
        })



        const emailExist= await Otp.findOne({email})
        const otp= generateotp()

        if(emailExist){
            await Otp.findOneAndUpdate({email},{
                otp: otp,
                isUsed: false
            })
        }
        else{
            await Otp.create({
               email: email,
               otp: otp,
               isUsed: false 
            })
        }
        await sendMail(otp,email)





         return res.status(200).json({message: "user  created successfully",data})  

    }
    catch(error){
        console.log(error.message);
        res.status(400).json({
        message: "error to register user",

        })
    }
}


export const login =async (req,res) =>{
    try{
        const{email, password} = req.body
        const userExist =await User.find({email})

         if(!userExist[0]){
            return res.status(400).json({message: "user doesnt exist to login"})
         }

         const isPasswordMatched = bcrypt.compareSync(password, userExist[0].password)

         if(!isPasswordMatched){
            return res.status(400).json({message: "password doesnt match"})
         }

         
        //  token
         const payLoad={
            email: userExist[0].email,
            fullname : userExist[0].fullname,
            
         }
         const token= jwt.sign(payLoad,"thisissecretpassword")

         res.cookie('authToken',token)


         return res.status(200).json({
            message:"logged in successfully",
            data :payLoad,token
         })

    }


    catch(error){
        console.log(error.message);
        res.status(500).json({
            message: "failed to login",
            error :error.message
        })

    }
}


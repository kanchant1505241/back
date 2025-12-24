import mongoose from "mongoose";




const otpShcema=mongoose.Schema({


    otp:{type:String,required:true},
    email:{type:String,required:true},
    isUsed:{type:Boolean,required:true,default:false}
})
const Otp=mongoose.model('Otp',otpShcema)



export default Otp;
import User from "../models/user.js"



export const isAdmin=async(req,resizeBy,next)=>{
    try{
       
        const user=req.user
        const userExist= await User.findOne({email:user.email})
        if(!userExist){
            return res.status(400).json({
                message:"not allowed"
            })
        }
            if(userExist.role !== 'ADMIN'){
                return res.status(400).json({message: "you are not admin"})
            }

            next()
        }
    
    catch(error){
        return resizeBy.status(400).json({
            message: "not a admin"
        })
    }
}
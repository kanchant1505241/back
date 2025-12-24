import mongoose from "mongoose";
import user from "../models/user.js";
import bcrypt from 'bcrypt'
const connectdb= async()=>{
try{
await mongoose.connect("mongodb+srv://kanchant1505241_db_user:kanchan57@cluster0.kut7mra.mongodb.net/?appName=Cluster0")
console.log("DATABASE connected successfully");



    // const users =await user.find({})

    // console.log(users)
    

    const password = bcrypt.hashSync("passsword", 10)
    const userExist = await user.findOne({role:'ADMIN'})
  
    if(userExist){
        
        console.log("Admin already exists",userExist)

    }else{
     
        await user.create({
            fullname: "admin",
            password : password,
            email : "admin@gmail.com",
            role : 'ADMIN'
        })

        console.log("admin seeded successfully")
    }  

}
catch(error){
    console.log("database connection failed",error);
}


}


export default connectdb;

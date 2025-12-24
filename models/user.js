import mongoose from "mongoose";

 const User= mongoose.model('user',new mongoose.SchemaTypeOptions({
    fullname: {type: String, },
    email: {type: String, required: true , unique: true},
    role:{type: String, enum :['ADMIN', 'USER'] , default:'USER'},
    address: {type: String},
    password:{type:String}
}))

export default  User
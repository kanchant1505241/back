import mongoose from "mongoose"

 const category= mongoose.model('category',new mongoose.Schema({
    name:{type: String, unique: true},
    description:{type: String,}

    // image:{type: string}
}))

export default category
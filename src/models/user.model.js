import mongoose, { Mongoose, mongo } from "mongoose";

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true, //lipia espacios
    },
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    }
},
{
    timestamps: true

   
})

export default mongoose.model('User', userSchema)
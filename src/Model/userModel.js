const mongoose=require("mongoose")

const UserdeatilsSchema=new mongoose.Schema({
    name:{
       type:String,
      
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true,
        trim:true
    },
    phoneNumber:{
        type:String,
        
         unique:true, 
    },
    password: {
        type: String,
        required: true,
       
    },
    token:{
        type:String,
        default:''
    }
        
},{timestamps:true})
module.exports=mongoose.model("Usr",UserdeatilsSchema)
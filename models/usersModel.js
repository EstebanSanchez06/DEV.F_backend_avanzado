const {Schema, model} = require("mongoose")

const UserSchema = Schema({
    userName:{
        type: String,
        required:[true, "UserName is required"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required: [true, "Password is required"]
    }
    ,
    phoneNumber:{
        type:Number,
        required:[true, "Phone Number is required"]
    },
    active:{
        type:Boolean,
        default: true
    },

})

module.exports=model('User', UserSchema)
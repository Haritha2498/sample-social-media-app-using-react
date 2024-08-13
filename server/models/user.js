const {Schema}= require('mongoose');
const {model}=require('mongoose');



const smuserschema=new Schema({
    username: {type: String,required: true,unique: true},
    
    useremail: {type: String,required: true,unique: true},

    userdob: {type:String,required: true},
    
    hashedPassword: {type: String,required: true}

    

})


const smusermodel=model("smuser",smuserschema);
module.exports=smusermodel;
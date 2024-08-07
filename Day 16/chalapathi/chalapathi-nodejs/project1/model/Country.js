//database schema

const mongoose=require('mongoose')
const Schema=mongoose.Schema //creating schema
const passportLocalMongoose=require('passport-local-mongoose');
var Country =  new Schema({
    cid:{
        type:String
    },
    cname:{
        type:String
    },
    cDob:{
        type:Date
    },
    cAddres:{
        type:String
    },
    password:{
        type:String
    }
})

Country.plugin(passportLocalMongoose);
module.exports=mongoose.model('Country',Country)
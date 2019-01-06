const mongoose = require('mongoose');
const Schema=mongoose.Schema;

let user=new Schema({
    firstName:{
        type : String
    },
    lastName:{
        type : String
    },
    email:{
        type : String
    },
    password:{
        type : String
    },
},
    {
        collection: 'registry'
    });

    module.exports = mongoose.model('user', user);

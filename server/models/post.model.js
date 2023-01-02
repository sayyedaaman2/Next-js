const mongoose = require('mongoose');
const postSchema  = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String
    },
    content : {
        type : String,
    },
    image : {
        type : String,
    }
},{
    versionKey : false , timestamps : false
})

module.exports = mongoose.model("post",postSchema);
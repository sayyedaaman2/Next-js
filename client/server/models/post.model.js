const mongoose = require('mongoose');
const postSchema  = new mongoose.Schema({
    content : {
        type : String,
    }
},{
    versionKey : false , timestamps : false
})

module.exports = mongoose.model("post",postSchema);
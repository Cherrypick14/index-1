const mongoose = require('mongoose');


const PostSchema = new  mongoose.Schema({
   author :{type:String, required:true},
    title: {type:String, required:true},
desc:{type:String, required:true, maxlength:500}

},
{timestamps:true}
)

module.exports = mongoose.model('Post' ,PostSchema );
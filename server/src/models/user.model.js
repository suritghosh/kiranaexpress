const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type: String,default:'user'},
    banned:{type: Boolean,default:false}
});
exports.User = mongoose.model('User',userSchema);
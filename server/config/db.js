const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kiranaExpress') 
module.exports=mongoose.connection

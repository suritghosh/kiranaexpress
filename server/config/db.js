const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ghoshsurit:surit2000@kiranaexpress.k9suy.mongodb.net/kiranaExpress') 
module.exports=mongoose.connection

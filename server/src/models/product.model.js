const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    id:Number,
    name:String,
    category:String,
    price:Number,
    stock:Number,
    description:String,
    imageUrl:String
});
const Product = mongoose.model('Product',productSchema);
module.exports = {Product}
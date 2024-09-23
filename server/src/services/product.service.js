const {Product} = require('../models/product.model');

exports.createProductService = async(data)=>{
    const item = await Product.findOne({id:data.id});
    if(item)
        return {error:"Product already exists"};
    else{
        const newProduct = new Product(data);  
        return await newProduct.save();
    }
}
exports.retrieveProductService= async ()=>{
    return await Product.find();
}
exports.updateProductService = async(id,updateData)=>{
    const product = await Product.findOne({id:id});
    if(!product)
        return {error:'Product does not exist'}
    if(updateData.stock<0)
        return {error:'Stock cannot be less than 0'}
    return await Product.findOneAndUpdate({'id':id},{$set:{updateData}});   
}

exports.deleteProductService = async(id)=>{
    const data = await Product.findOneAndDelete({id:id});
    if(data)
        return data;
    else
        return {error: 'Product not found'};
}
exports.searchProductService = async(name)=>{
    try{
        return await Product.find({name:{$regex:name,$options:'i'}});
    }
    catch(err){
        throw err;
    }
}
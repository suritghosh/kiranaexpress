const { Cart } = require("../models/cart.model");
const { addToCartService, plusProductQuantityService, minusProductQuantityService, deleteCartService } = require("../services/cart.service")

exports.addToCart = async(req,res)=>{
    try{
        const result = await addToCartService(req.body);
        if(result.error)
            res.status(result.status).json({message:result.error});
        else
        res.status(result.status).json({message:result.message,cart:result.data})
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
}
exports.plusProductQuantity = async(req,res)=>{
    try{
        const result = await plusProductQuantityService(req.body);
        if(result.error)
            res.status(result.status).json({message:result.error});
        else
        res.status(200).json({message:result.message,data:result.data})
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
}
exports.minusProductQuantity = async(req,res)=>{
    try{
        const result = await minusProductQuantityService(req.body);
        if(result.error)
            res.status(result.status).json({message:result.error});
        else
        res.status(200).json({message:result.message,data:result.data})
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
}
exports.retrieveCart = async(req,res)=>{
    try{    
    const userId=req.params.userId;
    const data = await Cart.findOne({userId:userId});
    res.status(200).json({message:data});
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
exports.deleteCart = async(req,res)=>{
    try{
    const result = await deleteCartService(req.params); 
    if(result.error)
        res.status(result.status).json({message:result.message});
    else
        res.status(200).json({message:result.message,data:result.data});
    }
    
    catch(err){
        res.status(500).json({message:err.message})
    }
}
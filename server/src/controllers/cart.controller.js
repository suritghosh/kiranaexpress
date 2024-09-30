const { addToCartService, plusProductQuantityService } = require("../services/cart.service")

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
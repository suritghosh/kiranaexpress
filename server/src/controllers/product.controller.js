const { updateProductService, deleteProductService, createProductService, retrieveProductService, searchProductService } = require('../services/product.service');

exports.createProduct= async(req,res)=>{
    try{
        const data = req.body;
        const result = await createProductService(data);
        if(result.error)
            res.status(400).json({message:result.error});
        res.status(201).send(result);
    }   
    catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.retrieveProduct= async(req,res)=>{
    try{
        const result = await retrieveProductService();
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.updateProduct= async(req,res)=>{
    try{
        const id = req.params.id;
        const updateData= req.body;
        const result = await updateProductService(id,updateData) ;
        if(result.error)
            res.status(400).json({message:result.error})
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.deleteProduct= async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await deleteProductService(id)
        if(result.error)
            res.status(400).json(result.error);
        res.status(200).json({message: 'Product deleted successfully', result});
    }
    catch(err){
            res.status(500).json({message:'Internal Server Error:'+err.message});

    }
}

exports.searchProduct= async(req,res)=>{
    try{
        const list = await searchProductService(req.params.name);
        if(list.length === 0 )
            res.status(400).json({message:'No products found'});
        else
            res.status(200).json(list);        
    }
    catch(err){
        res.status(500).json({message:'Internal Server Error:'+err.message});
    }
}
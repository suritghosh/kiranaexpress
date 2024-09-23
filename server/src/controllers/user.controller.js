    const { User } = require("../models/user.model");
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const { SECRET_KEY } = require('../../config/serverConfig');
    const { registerUserService, loginUserService, promoteUserService, demoteAdminService, banUserService, unbanUserService } = require("../services/user.service");

    exports.registerUser = async (req,res)=>{
        try{
            const result = await registerUserService(req.body);
            if(result.check){
                res.status(201).json({message:'User Registered!',token:result.token});
            }
            else{
                res.status(409).json({message:"User already exists"});
            }
        }
        catch(err){
            res.status(500).json({message:err.message});
        }
    }
    exports.loginUser = async (req,res)=>{
        try {
            const result = await loginUserService(req.body);
            if(result.error)
                res.status(result.status).json({message:result.error})
            res.status(200).json({message:result.message,token:result.token})
        } 
        catch(err){ 
            res.status(500).json({message:err.message});
        }
    }
    exports.logoutUser= async(req,res)=>{
        try{
            res.status(200).json({message:'Logout Successfull!'});
        }
        catch(err){
            res.status(500).json({message:err.message});
        }
    }
    exports.promoteUser = async (req,res)=>{
        try {
            const result = await promoteUserService(req.params.id);
            if(result.error)
                res.status(result.status).json({message:result.error})
            res.status(200).json({message:result.message})   
        } 
        catch(err){
            res.status(500).json({message:'Internal Server Error: '+err.message});
        }
    }
    exports.demoteAdmin = async (req,res)=>{
        try {
            const result = await demoteAdminService(req.params.id);
            if(result.error)
                res.status(result.status).json({message:result.error});
            res.status(200).json({message:result.message}) ; 
        } 
        catch(err){
            res.status(500).json({message:'Internal Server Error: '+err.message});
        }
    }
    exports.banUser = async (req,res)=>{
        try {
            const result = await banUserService(req.params.id);
            if(result.error)
                res.status(result.status).json({message:result.error});
            res.status(200).json({message:result.message}) ; 
        }
        catch (err) {
            res.status(500).json({ message: `Internal Server Error: ${err.message}` });
        }
    }
    exports.unbanUser = async (req,res)=>{
        try {
            const result = await unbanUserService(req.params.id);
            if(result.error)
                res.status(result.status).json({message:result.error});
            res.status(200).json({message:result.message}) ; 
        }
        catch(err){
            res.status(500).json({message: `Internal Server Error: ${err.message}`});
        }
    }
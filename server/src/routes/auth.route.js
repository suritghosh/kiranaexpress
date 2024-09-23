// const express = require('express');
// const router = express.Router();
// const { authenticateToken, authorizeRoles } = require('../controllers/auth.controller');

// router.get('/user-dashboard',authenticateToken,authorizeRoles('user','admin','super admin'),(req,res)=>{
//     res.json({message:'Access Granted'})
// });
// router.get('/admin-dashboard',authenticateToken,authorizeRoles('admin','super admin'),(req,res)=>{
//     res.json({message:'Access Granted'})
// });
// router.get('/super-admin-dashboard',authenticateToken,authorizeRoles('super admin'),(req,res)=>{
//     res.json({message:'Access Granted'})
// });

// module.exports = router;
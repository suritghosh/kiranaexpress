const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')
const { authenticateToken, authorizeRoles } = require('../middlewares/auth.middleware');


router.post('/create-products',authenticateToken,authorizeRoles('admin','super admin'),productController.createProduct);
router.get('/retrieve-products',authenticateToken,authorizeRoles('user','admin','super admin'),productController.retrieveProduct);
router.put('/update-products/:id',authenticateToken,authorizeRoles('admin','super admin'),productController.updateProduct);
router.delete('/delete-products/:id',authenticateToken,authorizeRoles('admin','super admin'),productController.deleteProduct);
router.get('/search-products/:name',authenticateToken,authorizeRoles('user','admin','super admin'),productController.searchProduct);
module.exports = router;
const express = require("express");
const router = express.Router();
const cart = require('../controllers/cart.controller')
const { authenticateToken, authorizeRoles } = require('../middlewares/auth.middleware')

router.post('/create-cart',authenticateToken,authorizeRoles('super admin', 'user'),cart.addToCart);
router.put('/plus-prod-qty-cart',authenticateToken,authorizeRoles('super admin', 'user'),cart.plusProductQuantity);
router.put('/minus-prod-qty-cart',authenticateToken,authorizeRoles('super admin', 'user'),cart.minusProductQuantity);
router.get('/retrieve-cart/:userId',authenticateToken,authorizeRoles('super admin', 'user'),cart.retrieveCart);
router.delete('/delete-cart/:userId/:productId',authenticateToken,authorizeRoles('super admin', 'user'),cart.deleteCart);
module.exports = router;
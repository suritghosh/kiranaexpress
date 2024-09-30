const express = require("express");
const router = express.Router();
const cart = require('../controllers/cart.controller')
const { authenticateToken, authorizeRoles } = require('../middlewares/auth.middleware')

router.post('/create-cart',authenticateToken,authorizeRoles('super admin', 'user'),cart.addToCart);
router.post('/plus-prod-qty-cart',authenticateToken,authorizeRoles('super admin', 'user'),cart.plusProductQuantity);
module.exports = router;
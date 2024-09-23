const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticateToken, authorizeRoles } = require('../middlewares/auth.middleware');

router.post('/register',userController.registerUser);
router.get('/login',userController.loginUser);
router.put('/promote/:id',authenticateToken,authorizeRoles('super admin'),userController.promoteUser);
router.put('/demote/:id',authenticateToken,authorizeRoles('super admin'),userController.demoteAdmin);
router.put('/ban/:id',authenticateToken,authorizeRoles('super admin'),userController.banUser);
router.put('/unban/:id',authenticateToken,authorizeRoles('super admin'),userController.unbanUser);
module.exports = router;
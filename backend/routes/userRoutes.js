const express = require('express');
const { registerUser, authUser, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.put('/profile', protect, updateUserProfile);

module.exports = router;

const express = require('express');
const { getAllUsers, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeUser } = require('../middlewares/authorization');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', authenticateToken, authorizeUser, updateUser);
router.delete('/:id', authenticateToken, authorizeUser, deleteUser);

router.post('/login', loginUser);

module.exports = router;
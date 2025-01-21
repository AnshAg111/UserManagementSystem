const express = require('express');
const { getUser, updateUser, deactivateUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getUser);
router.put('/', authMiddleware, updateUser);
router.delete('/', authMiddleware, deactivateUser);

module.exports = router;

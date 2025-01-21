const express = require('express');
const { getAllUsers } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getAllUsers);

module.exports = router;

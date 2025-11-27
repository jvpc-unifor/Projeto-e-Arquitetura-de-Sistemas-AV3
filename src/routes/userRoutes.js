// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define as rotas e liga aos controladores
router.get('/listUsers', userController.getAll);
router.get('/listUser/:id', userController.getById);

module.exports = router;
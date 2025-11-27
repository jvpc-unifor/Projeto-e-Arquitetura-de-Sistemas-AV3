// src/controllers/userController.js
const userService = require('../services/userService');

const getAll = async (req, res) => {
    try {
        const data = await userService.listAllUsers();
        console.log("Listando todos os usuários..."); // Log simples
        res.json(data); // Retorna JSON (View)
    } catch (error) {
        res.status(500).send("Erro ao ler dados.");
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.findUserById(id);
        
        if (user) {
            console.log(`Usuário encontrado: ${user.name}`);
            res.json(user);
        } else {
            res.status(404).send("Usuário não encontrado.");
        }
    } catch (error) {
        res.status(500).send("Erro interno.");
    }
};

module.exports = { getAll, getById };
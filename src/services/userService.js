// src/services/userService.js
const userRepository = require('../repositories/userRepository');

const listAllUsers = async () => {
    // Chama a camada de dados
    const users = await userRepository.getUsers();
    return users;
};

const findUserById = async (id) => {
    const users = await userRepository.getUsers();
    // Regra de negócio: Buscar o usuário pela chave "user" + id
    const userKey = "user" + id;
    const user = users[userKey];
    return user;
};

module.exports = { listAllUsers, findUserById };
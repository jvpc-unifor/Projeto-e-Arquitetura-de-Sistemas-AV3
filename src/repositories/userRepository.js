// src/repositories/userRepository.js
const fs = require("fs");
const path = require("path");

// Caminho para o arquivo JSON
const dataPath = path.join(__dirname, "../../data/users.json");

const getUsers = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};

module.exports = { getUsers };
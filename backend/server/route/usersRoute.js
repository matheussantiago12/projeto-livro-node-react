const express = require("express");
const usersService = require('../service/usersService');
const router = express.Router();

router.get("/user/:usuario/:senha", async (req, res) => {
    const user = {
        usuario: req.params.usuario,
        senha: req.params.senha
    }
    
    const result = await usersService.getUser(user);
    res.json(result);
});

router.post('/user', async (req, res) => {
    const user = req.body;
    const newUser = await usersService.saveUser(user);

    res.json(newUser);
});

module.exports = router;
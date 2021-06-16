const database = require("../database/database");

exports.getUser = (user) => {
    return database.query("select * from usuario where usuario = $1 and senha = $2",
    [
        user.usuario,
        user.senha
    ]);
}

exports.saveUser = (user) => {
    return database.one('insert into usuario (usuario, senha) values ($1, $2) returning *', 
    [
        user.usuario,
        user.senha
    ]);
}
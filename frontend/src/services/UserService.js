import api from './api';

class UserService {
    static async get(usuario, senha) {
        const response = await api.get(`user/${usuario}/${senha}`);

        return (response.data && response.data.length > 0);
    }

    static async create(usuario, senha) {
        const response = await api.post("user", { usuario: usuario, senha: senha});

        return response.data !== undefined;
    }

}

export default UserService;
import api from './api'

class LivroService {
    static async getAll () {
        const response = await api.get('books')

        return response.data
    }

    static async create ({ titulo, quantidade, isbn }) {
        const response = await api.post('book', { titulo, quantidade, isbn })

        return response.data
    }

    static async delete (id) {
        const response = await api.delete(`book/${id}`)

        return response.data
    }
}

export default LivroService

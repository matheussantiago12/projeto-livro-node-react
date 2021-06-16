import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Button } from '@material-ui/core'
import livroService from '../../services/LivroService'
import LivroForm from '../LivroForm'


const Livros = () => {
    const [livros, setLivros] = useState([])
    const [isVisibleModal, setIsVisibleModal] = useState(false)

    const columns = [
        { field: 'codigo', headerName: 'Código', width: 150 },
        { field: 'titulo', headerName: 'Título', width: 300 },
        { field: 'quantidade', headerName: 'Quantidade', width: 150 },
        { field: 'isbn', headerName: 'ISBN', width: 300 },
        { field: 'id', headerName: ' ', width: 300, renderCell: (params) => (
          <div>
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => deleteBook(params.value)}
              >
                  Excluir
              </Button>
          </div>
        )}
    ]

    const deleteBook = async (id) => {
        await livroService.delete(id)
        
        setLivros(livros.filter(livro => livro.codigo !== id))
    }

    const handleCreateBook = async (data) => {
        await livroService.create(data)
        await listAllBooks()
        setIsVisibleModal(false);
    }

    const listAllBooks = async () => {
        const data = await livroService.getAll()
        const livros = data.map(row => ({ ...row, id: row.codigo }))

        setLivros(livros)
    }

    useEffect(() => {
        listAllBooks()
    }, [])

    return (
        <>
            <Button onClick={() => setIsVisibleModal(true)}>Cadastrar livro</Button>
            <LivroForm
                visible={isVisibleModal}
                handleClose={() => setIsVisibleModal(false)}
                handleCreateBook={handleCreateBook}
            />
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid rows={livros} columns={columns} pageSize={9} />
            </div>
        </>
    )
}

export default Livros
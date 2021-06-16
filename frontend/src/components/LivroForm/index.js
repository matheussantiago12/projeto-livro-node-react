import React, { useState } from 'react'
import { Button, Modal, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '25%',
      left: 'calc(50% - 200px)'
    },
    row: {
        marginTop: '25px',
        marginBottom: '25px'
    }
}))

const LivroForm = ({ visible, handleClose, handleCreateBook }) => {
    const [titulo, setTitulo] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [isbn, setIsbn] = useState('')
    const classes = useStyles()

    return (
        <Modal
            open={visible}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.paper}>
                <div className={classes.row}>
                    <label>Título</label>
                    <Input 
                        placeholder="Insira o título do livro" 
                        fullWidth={true} 
                        color="primary" 
                        margin="dense" 
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                </div>
                <div className={classes.row}>
                    <label>Quantidade</label>
                    <Input 
                        placeholder="Insira a quantidade de cópias" 
                        fullWidth={true} 
                        color="primary" 
                        margin="dense"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                    />
                </div>
                <div className={classes.row}>
                    <label>ISBN</label>
                    <Input 
                        placeholder="Insira o ISBN do livro" 
                        fullWidth={true} 
                        color="primary" 
                        margin="dense" 
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}
                    />
                </div>
                <div className={classes.row}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ float: 'right' }}
                        onClick={() => handleCreateBook({ titulo, quantidade, isbn })}
                    >
                        Salvar
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default LivroForm

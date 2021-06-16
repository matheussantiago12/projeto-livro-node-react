import React, { useState } from 'react'

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Link,
  Grid
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import UserService from '../../services/UserService'

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Usuarios() {
  const classes = useStyles()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleCreateUser = async (login, password) => {
    if(!login || !password){
      alert('Preencha os dois campos para prosseguir com o cadastro!')
      return;
    }

    const result = await UserService.create(login, password)
    if (result) {
      history.push('/');
    } else {
      alert('Não foi possível realizar o cadastro');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="user"
                label="Login"
                name="user"
                autoComplete="usuário"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => { handleCreateUser(user, password) }}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Você já tem um cadastro? Efetue o Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
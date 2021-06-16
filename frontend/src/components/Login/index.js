import React, { useState } from 'react'

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Typography,
    Container,
    Grid,
    Link
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import UserService from '../../services/UserService'
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.primary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const handleGetUser = async (user, password) => {
        const result = await UserService.get(user, password);
        console.log(result)

        if (result) {
            history.push('/livros')
        } else {
            alert('Usuário ou senha incorretos!');
        }
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="Usuário"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lembrar senha"
                    />
                    <Grid container>
                        <Grid item>
                            <Link href="/usuarios" variant="body2">
                                Cadastre-se
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => handleGetUser(user, password)}
                    >
                        Efetuar Login
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default Login;
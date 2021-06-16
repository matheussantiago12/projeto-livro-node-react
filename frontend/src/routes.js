import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Livro from './components/Livro'
import Teste from './pages/Teste'
import Login from './components/Login';
import Usuarios from './components/Usuarios';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/teste" component={Teste} exact />
                <Route path="/livros" component={Livro} exact />
                <Route path="/usuarios" component={Usuarios} exact />
                <Route path="/" component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

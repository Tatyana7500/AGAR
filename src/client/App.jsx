import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './components/login';
import Main from './components/main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} render={props => <Login {...props} /> } />
                    <Route path='/login' render={props => <Login {...props} /> } />
                    <Route path='/main' render={props => <Main {...props} /> } />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
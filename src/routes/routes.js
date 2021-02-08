import React from 'react';
import App from '../containers/App';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import Header from '../components/Header/Header';
import Issues from '../components/Issues/Issues';

export default (
    <App>
        <Header />
        <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/issues/:id' exact component={Issues} />
            <Route render={() => (<p>Not found</p>)} />
        </Switch>
    </App>
)

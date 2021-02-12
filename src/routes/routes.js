import React from 'react';
import App from '../containers/App';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Issues from '../components/Issues/ItemIssues/Issue/Issues';
import ListIssues from '../components/Issues/ListIssues/ListIssues'

export default (
    <App>
        <Header />
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/list_issues/:page' exact component={ListIssues} />
            <Route path='/issues/:id' exact component={Issues} />
            <Route render={() => (<p>Not found</p>)} />
        </Switch>
    </App>
)

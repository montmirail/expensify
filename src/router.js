import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// ----- components -----
import Overview from './components/Overview';
import Create from './components/Create';
import Edit from './components/Edit';
import Help from './components/Help';
import NotFound from './components/NotFound';

// ----- pages -----
import LoginPage from './components/LoginPage';

export default () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact/>
                <PrivateRoute path="/overview" component={Overview}/>
                <PrivateRoute path="/create" component={Create}/>
                <PrivateRoute path="/edit/:id" component={Edit}/>
                <Route path="/help" component={Help}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);
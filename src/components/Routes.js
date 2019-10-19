import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import DashboardPage from './pages/DashboardPage';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={TestPage1} />
                <Route path='/test2' exact component={TestPage2} />
            </Switch>
        );
    }
}

export default Routes;

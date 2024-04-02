import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import H5Tutorial from './page/h5-tutorial/controller/H5Tutorial';
import HomeScreen from './page/home/controller/HomeScreen';
import Tutorial from './Tutorial';
import home2204 from './page/home2204/controller/home2204';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={home2204} exact />
            <Route path="/h5-tutorial/:url" component={H5Tutorial} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path='/home-02' component={home2204} />
            <Redirect to="/" />
        </Switch>
    </Router>
);

export default App;

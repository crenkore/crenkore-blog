import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));
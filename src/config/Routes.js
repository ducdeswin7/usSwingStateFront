import React from 'react';

import Main from '../components/Main';
import Landing from '../components/landing/Landing';
import Home from '../components/home/Home';
import { Route, IndexRoute} from 'react-router';

export default (
    <Route path="/" component={Main}>
        <Route path="home" component={Home}/>
        <IndexRoute component={Landing} />
    </Route>
);
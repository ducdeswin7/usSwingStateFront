import  React from 'react';
import  ReactDom from 'react-dom'
import  { Router, Route, browserHistory } from 'react-router';
import routes from './config/Routes';

ReactDom.render(
    <Router history={browserHistory}>
        {routes}
    </Router>,
    document.getElementById('app')
);

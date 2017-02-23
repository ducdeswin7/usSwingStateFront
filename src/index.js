import  React from 'react';
import  ReactDom from 'react-dom'
import  { Router, Route, browserHistory } from 'react-router';
import routes from './config/Routes';
import statesData from './data/states-data';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    regionData: statesData,
};

const store = createStore(rootReducer, initialState);

ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);

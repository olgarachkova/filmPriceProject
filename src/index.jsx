import './reset.css'

import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { myroutes } from './myroutes'
import { store } from './store'



ReactDom.render(

    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                {myroutes.map((route, idx) => <Route {...route} key={idx} />)}
            </Switch>
            <Footer />
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);
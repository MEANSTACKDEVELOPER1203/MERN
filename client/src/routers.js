import React, { Component } from 'react';

import Comp1 from './components/functional/comp1';
import Comp2 from './components/functional/comp2';
import Comp3 from './components/functional/comp3';
import Form from './components/functional/form'

import Header from './components/containers/header';
import history from './utils/history';
import { Router, Route } from 'react-router';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/Comp1" component={Comp1} />
                        <Route path="/Comp2" component={Comp2} />
                        <Route path="/Comp3" component={Comp3} />
                        <Route path="/Form" component={Form} />
                    </div>
                </Router>
            </div>
        )
    }
}
export default Routes;
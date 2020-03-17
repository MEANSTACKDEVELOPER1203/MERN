import React, { Component } from 'react';
import Comp1 from '../functional/comp1';
import Navbar from './navbar';
import Landing from './landing';
import Footer from './footer';
import history from '../../utils/history';
import { Router, Route } from 'react-router';
import store from '../../redux/store';

//import componant
import Register from '../users/register';
import Login from '../users/login';
import Dashboard from '../dashborad/Dashboard';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../../authAction/authActions';
import { clearCurrentProfile } from '../../authAction/profileAction';

//check for token
console.log("localStorage Token === ", localStorage.jwtToken)
if (localStorage.jwtToken) {
    //set auth token headers auth
    setAuthToken(localStorage.jwtToken)
    //decode token and get user info and exp
    const decode = jwt_decode(localStorage.jwtToken)
    //set user isAuthenticated
    store.dispatch(setCurrentUser(decode))

    //check for expired token
    const now = Date.now() / 1000
    if (decode.exp < now) {
        //log out the user
        store.dispatch(logoutUser());
        //Clear current profile
        store.dispatch(clearCurrentProfile());
        //Redirect to login page
        window.location.href = '/login'
    }
}

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Navbar />
                        <Route exact path='/' component={Landing} />
                        <Route path="/Comp1" component={Comp1} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />


                        {/* 
                        <Route path="/Comp2" component={Comp2} />
                        <Route path="/Comp3" component={Comp3} />
                        <Route path="/Form" component={Form} /> */}

                        <Footer />
                    </div>
                </Router>

            </div>
        )
    }
}
export default Routes;
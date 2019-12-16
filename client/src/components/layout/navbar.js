import React, { Component } from 'react';

import Register from './components/users/register';
import Login from './components/users/login';

import { Router, Route } from 'react-router'

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                </Router>

            </div>
        )
    }

}

export default Routes;
































































// import React from 'react'
// import { BrowserRouter as Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <React.Fragment>
//             <nav className="navbar navbar-expand-lg mt-0 p-4 text-center navbar-dark bg-primary">
//                 {/* <a class="navbar-brand" href="landing.html">Navbar</a> */}
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse " id="navbarSupportedContent" >
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <Link to="/" >Home <span class="sr-only"></span></Link>
//                         </li>
//                         <li className="nav-item active">
//                             <Link className="nav-link active" to="/">DevConnector <span className="sr-only"></span></Link>
//                         </li>
//                         <li className="nav-item active">
//                             <Link className="nav-link" to="/">Developers <span className="sr-only"></span></Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Link</Link>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <Link className="dropdown-item" to="/">Action</Link>
//                                 <Link className="dropdown-item" to="/">Another action</Link>
//                                 <div className="dropdown-divider"></div>
//                                 <Link className="dropdown-item" to="/">Something else here</Link>
//                             </div>
//                         </li>

//                         {/* <li class="nav-item">
//                             <a class="nav-link disabled" href="landing.html" tabindex="-1" aria-disabled="true">Disabled</a>
//                         </li> */}
//                     </ul>
//                     <ul className="navbar-nav ml-auto">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/register">
//                                 Sign Up
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/login">
//                                 Login
//                             </Link>
//                         </li>
//                     </ul>

//                     {/* <form class="form-inline my-2 my-lg-0">
//                         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//                         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </form> */}
//                 </div>
//             </nav>

//         </React.Fragment>
//     )
// }

// export default Navbar;
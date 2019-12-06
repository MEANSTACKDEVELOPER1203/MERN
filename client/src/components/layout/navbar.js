import React from 'react'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                {/* <a class="navbar-brand" href="landing.html">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="landing.html">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="landing.html">DevConnector <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="landing.html">Developers <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="landing.html">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="landing.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="landing.html">Action</a>
                                <a class="dropdown-item" href="landing.html">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="landing.html">Something else here</a>
                            </div>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="landing.html" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>

        </React.Fragment>
    )
}

export default Navbar;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div className="container">
                <React.Fragment>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link style={{ color: 'white', marginTop: "5px", marginRight:"5px", fontFamily: "inherit", textDecoration: 'inherit' }} to="/Comp1">Home | </Link>
                            <Link style={{ color: 'white', marginTop: "5px", marginRight:"5px", fontFamily: "inherit", textDecoration: 'inherit' }} to='/Comp2'>Features | </Link>
                            <Link style={{ color: 'white', marginTop: "5px", marginRight:"5px", fontFamily: "inherit", textDecoration: 'inherit' }} to='/Comp3'>Pricing</Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar>
                    <br />
                </React.Fragment>
                {/* <Link to='/Comp1'>
                    Comp11
                </Link>
                <Link to='/Comp2'>
                    Comp22
                </Link>
                <Link to='/Comp3'>
                    Comp33
                </Link>
                <Link to='/Form'>
                    Form
                </Link> */}
            </div>
        )
    }
}
export default Header;
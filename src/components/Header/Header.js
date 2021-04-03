import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar-area">
            <Navbar expand="lg" >
                <Container >
                    <Navbar.Brand className="header-navbar-area" id="website-title" to="/">BD Bazar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="header-navbar-area" id="basic-navbar-nav">
                        <Nav className="ml-auto" id="navlink-area">
                            <Link className="link-area-name" to="/home">Home</Link>
                            <Link className="link-area-name" to="/login" >Orders</Link>
                            <Link className="link-area-name" to="/login">Admin</Link>
                            <Link className="link-area-name" to="/">Deals</Link>
                            <button to="/login" id="login-button"><a style={{ textDecoration: 'none', color: 'white' }} href="/login" >Login</a></button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="input-group w-25 container searching-food-area">
                <input type="text" className="form-control" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                    <button className="btn " id="search-food-item-button" type="button">Search</button>
                </div>
            </div>
        </div>

    );
};

export default Header;
import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Navbar.css';

class Header extends Component {
    render() {
        return (
            <Navbar bsStyle="inverse">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Estoque</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem>
                        Adicionar Estoque
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
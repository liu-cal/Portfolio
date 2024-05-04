import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavElement from './NavElement'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function PageNavbar() {
    return (
        <Navbar expand="lg" className='navbar-background'>
            <Container>
                {/* normal version nav bar */}
                {/* <div
                    style={{ alignItems: 'center' }}
                    className="navbar hidden lg-flex"
                > */}
                <Navbar.Brand style={{ fontFamily: 'Istok Web, sans-serif', letterSpacing: '5px', textTransform: 'uppercase', display: 'flex', flexDirection: 'column', marginLeft: '1.25rem' }}>
                    {/* <div > */}
                    <Link
                        className="navbar-element"
                        to={'/'}
                    >
                        Caleb
                    </Link>
                    <Link
                        className="navbar-element"
                        to={'/'}
                    >
                        Liu
                    </Link>
                    {/* </div> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ backgroundColor: '#F3EDE9' }}>

                    {/* <div
                        style={{ letterSpacing: '1px' }}
                        className=""
                    > */}
                    <Nav className="me-auto navbar-container" style={{ letterSpacing: '1px' }}>

                        <Nav.Link>
                            <NavElement route='About' />
                        </Nav.Link>
                        <Nav.Link>
                            <NavElement route='Skills' />
                        </Nav.Link>
                        <Nav.Link>
                            <NavElement route='Blog' />
                        </Nav.Link>
                        <Nav.Link>
                            <NavElement route='Contact' />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default PageNavbar

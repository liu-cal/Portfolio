import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavElement from './NavElement'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import VerticalLine from './VerticalLine';

function PageNavbar() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    }

    return (
        <Navbar expand="lg" className='navbar-background'>
            <Container>
                <Navbar.Brand style={{ fontFamily: 'Istok Web, sans-serif', letterSpacing: '5px', textTransform: 'uppercase', display: 'flex', flexDirection: 'column', marginLeft: '1.25rem' }}>
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
                </Navbar.Brand>
                {/* <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '10%' }}> */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', height: '50%', marginLeft: '10%' }}>
                    <a style={{ color: '#4A4A4A' }}
                        onClick={() => changeLanguage('en')}>EN</a>
                    <div style={{ borderLeft: '1px #4A4A4A solid', margin: '0em', height: '28px' }}></div>
                    <a style={{ color: '#4A4A4A' }}
                        onClick={() => changeLanguage('fr')}>FR</a>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ backgroundColor: '#F3EDE9' }}>
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
                {/* </div> */}
            </Container>
        </Navbar >
    )
}

export default PageNavbar

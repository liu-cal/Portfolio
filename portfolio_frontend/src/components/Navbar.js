import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavElement from './NavElement'

function Navbar() {
    return (
        <div className="navbar-background">
            {/* normal version nav bar */}
            <div
                style={{ alignItems: 'center' }}
                className="navbar"
            >
                <div style={{ fontFamily: 'Istok Web, sans-serif', letterSpacing: '5px', textTransform: 'uppercase', display: 'flex', flexDirection: 'column', marginLeft: '1.25rem' }}>
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
                </div>
                <div
                    style={{ letterSpacing: '1px' }}
                    className="navbar-container"
                >
                    <NavElement route='About' />
                    <NavElement route='Skills' />
                    <NavElement route='Blog' />
                    <NavElement route='Contact' />
                </div>
            </div>
        </div>
    )
}

export default Navbar

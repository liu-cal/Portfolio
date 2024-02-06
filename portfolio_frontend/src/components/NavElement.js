import React from 'react';
import { Link } from 'react-router-dom';

const NavElement = ({ route }) => {
    return (
        <div style={{ fontFamily: 'Istok Web, sans-serif', display: 'flex', flexDirection: 'column' }}>
            <hr style={{ margin: '5px 0', border: '0.5px solid #8F7B6A', width: '6rem' }} />
            <Link
                className="navbar-element"
                to={`/${route}`}
            >
                {route}
            </Link>
        </div>
    );
};

export default NavElement;
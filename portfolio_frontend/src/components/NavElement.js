import React from 'react';
import { Link } from 'react-router-dom';

const NavElement = ({ route }) => {
    return (
        <div style={{ fontFamily: 'Istok Web, sans-serif', display: 'flex', flexDirection: 'column' }}>
            <hr className='navline' />
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
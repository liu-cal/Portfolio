import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavElement = ({ route }) => {
    const { t, i18n } = useTranslation();

    return (
        <div style={{ fontFamily: 'Istok Web, sans-serif', display: 'flex', flexDirection: 'column' }}>
            <hr className='navline' />
            <Link
                className="navbar-element"
                to={`/${route}`}
            >
                {t(`${route}-nav`)}
            </Link>
        </div>
    );
};

export default NavElement;
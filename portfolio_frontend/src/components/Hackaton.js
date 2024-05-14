import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Hackathon = ({ year, name, description }) => {
    const { t, i18n } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='hackathon'
            style={{
                border: `2px solid ${isHovered ? '#000' : 'transparent'}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p style={{ textAlign: 'center' }}>{year}</p>
            <div
                style={{
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                }}
            >
                {isHovered && (
                    <>
                        <p style={{ textAlign: 'center' }}>{name}</p>
                        <p style={{ textAlign: 'justify' }}>
                            {t(`Skills.${description}-description`)}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Hackathon;

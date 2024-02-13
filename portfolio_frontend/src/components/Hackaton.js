import React, { useState } from 'react';

const Hackathon = ({ year, name, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33%',
                border: `2px solid ${isHovered ? '#000' : 'transparent'}`,
                borderRadius: '10px',
                padding: '10px',
                transition: 'border-color 0.5s ease'
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
                        <p style={{ textAlign: 'justify' }}>{description}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Hackathon;

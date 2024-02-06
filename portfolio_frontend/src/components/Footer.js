import React from 'react'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-element">
                    <div
                        style={{ fontFamily: 'Istok Web, sans-serif' }}
                        className="text-lg"
                    >
                        &#169; 2024 Caleb Liu
                    </div>
                </div>
                <div className="footer-element footer-images">
                    <a href="https://github.com/liu-cal">
                        <img src={github} alt='Github' style={{ width: '3rem', height: '3rem' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/caleb-liu-94047b292/">
                        <img src={linkedin} alt='Linkedin' style={{ width: '3rem', height: '3rem' }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

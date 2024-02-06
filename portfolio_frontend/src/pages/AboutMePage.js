import React, { useEffect } from 'react';
import Glide from "@glidejs/glide"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function AboutMePage() {
    // useEffect(() => {
    //     const glide = new Glide('.glide', {
    //         type: 'carousel',
    //         perView: 4,
    //         focusAt: 'center',
    //         breakpoints: {
    //             800: {
    //                 perView: 2
    //             },
    //             480: {
    //                 perView: 1
    //             }
    //         }
    //     });
    //     glide.mount();
    // }, []);

    return (
        <div>
            <Navbar />
            <div className='aboutpage-container'>
                <div style={{ width: '33%' }}>
                    <div style={{ marginTop: '27%', backgroundColor: '#D5D5D5', height: '73%' }}>
                        <div style={{ margin: '10%' }}>
                            <h1>Goals & Interests</h1>
                            <h3>asdasd</h3>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', height: '40rem', width: '40%', marginTop: '1%' }}>
                    <div style={{ marginTop: '10%', marginLeft: '4%', marginRight: '4%' }}>
                        <h2>Short-term goals</h2>
                        <p>Receive Computer Science & Technology diploma</p>
                        <p>Get Accepted in Software Engineering at Polytechnique Montreal</p>
                        <h2>Long-term goals</h2>
                        <p>Receive doctorate diploma in Software Engineering</p>
                        <p>Teach Computer Science at a Cegep, University or Professional School Level</p>
                        <h2>Hobbies</h2>
                        <p>Learning new skills</p>
                    </div>

                    {/* <div className="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">0</li>
                                <li className="glide__slide">1</li>
                                <li className="glide__slide">2</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default AboutMePage
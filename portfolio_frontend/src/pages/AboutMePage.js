import React, { useEffect, useState } from 'react';
import Glide from "@glidejs/glide"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Dancing from "../images/dancing.jpg"
import Reading from "../images/reading.jpeg"
import Working from "../images/library.jpg"

function AboutMePage() {
    const [slider] = useState(new Glide(`.glide`, {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        autoplay: 3500,
    }))
    useEffect(() => {
        slider.mount()

        // subscribe to an event 
        slider.on('run.before', (event) => {
            // ... do something cool here
        })
    }, [])

    return (
        <div>
            <Navbar />
            <div className='aboutpage-container'>
                <div style={{ width: '33%' }}>
                    <div style={{ marginTop: '27%', backgroundColor: '#D5D5D5', height: '73%' }}>
                        <div style={{ marginLeft: '10%', paddingTop: '3%' }}>
                            <h1>Goals & Interests</h1>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', height: '50rem', width: '40%', marginTop: '1%' }}>
                    <div style={{ marginTop: '10%', marginLeft: '4%', marginRight: '4%' }}>
                        <h2>Short-term goals</h2>
                        <p>Receive Computer Science & Technology diploma</p>
                        <p>Get Accepted in Software Engineering at Polytechnique Montreal</p>
                        <h2>Long-term goals</h2>
                        <p>Receive doctorate diploma in Software Engineering</p>
                        <p>Teach Computer Science at a Cegep, University or Professional School Level</p>
                        <h2>Hobbies</h2>
                        <p>Learning new skills such as skateboarding, dancing, diving, playing basketball, reading, and listening to music</p>
                    </div>

                    <div className="glide" style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '5%' }}>
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">
                                    <img src={Dancing} style={{ display: 'block', width: '100%' }} />
                                </li>
                                <li className="glide__slide">
                                    <img src={Working} style={{ display: 'block', width: '100%' }} />
                                </li>
                                <li className="glide__slide">
                                    <img src={Reading} style={{ display: 'block', width: '100%' }} />
                                </li>
                            </ul>
                        </div>
                        <div class="glide__bullets" data-glide-el="controls[nav]">
                            <button class="glide__bullet" data-glide-dir="=0"></button>
                            <button class="glide__bullet" data-glide-dir="=1"></button>
                            <button class="glide__bullet" data-glide-dir="=2"></button>
                        </div>
                        {/* <div className='glide__arrows' data-glide-el='controls'>
                            <button
                                className='glide__arrow glide__arrow--left'
                                data-glide-dir='<'
                                style={{ color: '#000000' }}
                            >
                                {`<`}
                            </button>
                            <button
                                className='glide__arrow glide__arrow--right'
                                data-glide-dir='>'
                                style={{ color: '#000000' }}
                            >
                                {`>`}
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default AboutMePage
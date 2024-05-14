import React, { useEffect, useState } from 'react';
import Glide from "@glidejs/glide"
import Footer from "../components/Footer"
import PageNavbar from "../components/PageNavbar"
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Dancing from "../images/dancing.jpg"
import Reading from "../images/reading.jpeg"
import Working from "../images/library.jpg"
import { useTranslation } from 'react-i18next';

function AboutMePage() {
    const { t, i18n } = useTranslation();
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
            <PageNavbar />
            <div className='aboutpage-container'>
                <div className='aboutpage-title-container'>
                    <div className='aboutpage-title-container-2'>
                        <div className='aboutpage-title-container-3'>
                            <h1 className='aboutpage-title'>
                                {t('About.about-title')}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='aboutpage-content'>
                    <div style={{ marginTop: '10%', marginLeft: '4%', marginRight: '4%' }}>
                        <h2>
                            {t('About.short-term-goals')}
                        </h2>
                        <p>
                            {t('About.short-term-goal-1')}
                        </p>
                        <p>
                            {t('About.short-term-goal-2')}
                            &nbsp;&#10003;
                        </p>
                        <h2>
                            {t('About.long-term-goals')}
                        </h2>
                        <p>
                            {t('About.long-term-goal-1')}
                        </p>
                        <p>
                            {t('About.long-term-goal-2')}
                        </p>
                        <h2>
                            {t('About.hobbies-title')}
                        </h2>
                        <p>
                            {t('About.hobbies')}
                        </p>
                    </div>

                    <div className="glide" style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '5%', marginBottom: '5%', width: '100%' }}>
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
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default AboutMePage